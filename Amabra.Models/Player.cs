using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Amabra.Models
{
    public class Player
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string Name { get; set; }
        public NationalTeam NationalTeam { get; set; }
        public Club Club { get; set; }
        public Nation Nation { get; set; }
    }
}
