using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "[{0}] required")]
        [Display(Name = "Username")]
        public string Username { get; set; } = string.Empty;

        [Required(ErrorMessage = "[{0}] required")]
        [DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty;
    }
}
