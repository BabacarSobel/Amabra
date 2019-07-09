using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amabra.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Player> Players { get; set; }
        public Nation Nation { get; set; }
        public List<Tournement> Tournements { get; set; }
        public List<Edition> Editions { get; set; }
        public List<Round> Rounds { get; set; }

        public Team()
        {

        }

        public Team(string name)
        {
            Name = name;
        }

        public override string ToString()
        {
            return this.Name;
        }
    }
}
