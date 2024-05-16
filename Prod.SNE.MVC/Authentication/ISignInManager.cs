using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Authentication
{
    public interface ISignInManager
    {
        Task<Release.Helper.StatusResponse> SignIn(string username, string password);
        Task SignOut();
    }
}
