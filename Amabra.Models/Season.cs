using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amabra.Models
{
    public class Season
    {
        public int Id { get; set; }
        public int Year { get; set; }
        public List<Edition> Editions { get; set; }
    }
}
