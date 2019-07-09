using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amabra.Models
{
    public class Game
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public Team Team1 { get; set; }
        public Team Team2 { get; set; }
        public int Score1 { get; set; }
        public int Score2 { get; set; }
        public List<Goal> Goals { get; set; }
        public Round Round { get; set; }
    }
}
