using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amabra.Models
{
    public class Nation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Club> Clubs { get; set; }
        public List<Tournement> Tournements { get; set; }
    }
}
