using System;
using System.Collections.Generic;
using System.Web.Mvc;
using VZDemoMvcApp.Models;

namespace VZDemoMvcApp.Controllers
{
    public class JoggingRecordsController : Controller
    {
        public ActionResult Index()
        {
            var joggingRecord = new JoggingRecord
            {
                Id = 1,
                CreatedAt = DateTime.UtcNow,
                Description = "Morning Run",
                Distance = 2.5
            };

            var joggingRecords = new List<JoggingRecord>();
            joggingRecords.Add(joggingRecord);

            return Json(joggingRecords, JsonRequestBehavior.AllowGet);
        }
    }
}