using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amabra.Models
{
    public class Edition
    {
        public int Id { get; set; }
        public Season Season { get; set; }
        public Tournement Tournement { get; set; }
        public List<Stage> Stages { get; set; }
    }
}
