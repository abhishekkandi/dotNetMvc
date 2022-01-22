using System.Web.Mvc;

namespace VZDemoMvcApp.Controllers
{
    public class AppController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}