using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amabra.Models
{
    public class Round
    {
        public int Id { get; set; }
        public Stage Stage { get; set; }
        public List<Team> Teams { get; set; }
        public List<Game> Games { get; set; }
    }
}
