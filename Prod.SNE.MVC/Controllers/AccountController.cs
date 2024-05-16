using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Prod.SNE.MVC.Authentication;
using Prod.SNE.MVC.Configuracion;
using Prod.SNE.MVC.Models;
using System;
using System.Collections.Generic;
using System.DirectoryServices.Protocols;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Controllers
{
    [Route("account")]
    public class AccountController : Controller
    {
        private readonly ConfigurationAD _configurationAD;
        private readonly ILogger _logger;
        private readonly ISignInManager _signInManager;

        public AccountController(
            IOptions<ConfigurationAD> configurationAD,
            ILogger<AccountController> logger,
            ISignInManager signInManager
            )
        {
            _configurationAD = configurationAD.Value;
            _logger = logger;
            _signInManager = signInManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("login")]
        [AllowAnonymous]
        public IActionResult Login(string? returnUrl)
        {
            if (User.Identity != null && User.Identity.IsAuthenticated)
            {
                if (string.IsNullOrEmpty(returnUrl))
                {
                    return RedirectToAction("Index", "Account");
                }
                else { return Redirect(returnUrl); }
            }

            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginViewModel model, string? returnUrl)
        {
            string defaultErrorMsg = new StringBuilder()
                .Append("No es posible autenticar, con las credenciales que proporcionó no son correctas o su cuenta no pertenece al grupo autorizado")
                .ToString();

            string specificErrorMsg = string.Empty;

            if (ModelState.IsValid)
            {
                try
                {
                    var signingInSuccessful = await _signInManager.SignIn(model.Username, model.Password);
                    if (signingInSuccessful.Success)
                    {
                        if (string.IsNullOrEmpty(returnUrl)) { returnUrl = "/"; }
                        return LocalRedirect(returnUrl);
                    }
                    else
                    {
                        specificErrorMsg = string.Join(",", signingInSuccessful.Messages);
                    }
                }
                catch (DirectoryOperationException ex)
                {
                    string errorMsg = "AD server returned an error";
                    specificErrorMsg = $"Couldn't authenticate you, {errorMsg}";
                    _logger.LogError($"{errorMsg}: {ex.Message}");
                }
                catch (Exception ex) // or perhaps catch LdapException (credentials) first
                {
                    _logger.LogWarning(
                        new StringBuilder()
                            .Append($"Couldn't authenticate user [{model.Username}] with provided ")
                            .Append($"credentials. {ex.Message}")
                            .ToString()
                    );
                }
            }
            ModelState.AddModelError( "Error", string.IsNullOrEmpty(specificErrorMsg) ? defaultErrorMsg : specificErrorMsg );
            ViewData["ReturnUrl"] = returnUrl;
            return View(model);
        }

        [HttpGet("logout")]
        public async Task<IActionResult> Logout()
        {
            try
            {
                await _signInManager.SignOut();
                return RedirectToAction(nameof(AccountController.Login));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Signing-out failed: {ex.Message}");
                return StatusCode(500);
            }
        }

        [Route("access-denied")]
        public IActionResult AccessDenied(string ReturnUrl)
        {
            Response.StatusCode = 403;
            return View();
        }
    }
}
