using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amabra.Models
{
    public class Tournement
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int numberOfTeams { get; set; }
        public string Type { get; set; }

        public Nation Nation { get; set; }
        public List<Edition> Editions { get; set; }
    }
}
