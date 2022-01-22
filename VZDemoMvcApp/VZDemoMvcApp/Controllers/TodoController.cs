using System.Web.Mvc;
using VZDemoMvcApp.Models;
using System.Collections.Generic;

namespace VZDemoMvcApp.Controllers
{
    public class TodoController : Controller
    {
        public ActionResult Index()
        {
            var todoList = new List<TodoItem>();
            todoList.Add(new TodoItem { Id = 1, Title = "Build Demo App" });
            todoList.Add(new TodoItem { Id = 2, Title = "Review by TM" });
            todoList.Add(new TodoItem { Id = 3, Title = "Make Edits" });
            todoList.Add(new TodoItem { Id = 4, Title = "Go Live" });

            return Json(todoList, JsonRequestBehavior.AllowGet);
        }
    }
}