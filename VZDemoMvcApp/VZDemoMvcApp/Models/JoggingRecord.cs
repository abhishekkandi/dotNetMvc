using System;

namespace VZDemoMvcApp.Models
{
    public class JoggingRecord
    {
        public int Id { get; set; }

        public double Distance { get; set; }

        public string Description { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
