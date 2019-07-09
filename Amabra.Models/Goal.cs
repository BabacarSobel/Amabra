using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amabra.Models
{
    public class Goal
    {
        public int Id { get; set; }
        public Game Game { get; set; }
        public Player Scorer { get; set; }
        public Player Assist { get; set; }
    }
}
