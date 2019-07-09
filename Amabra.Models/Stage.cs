using System.Collections.Generic;

namespace Amabra.Models
{
    public class Stage
    {
        public int Id { get; set; }
        public Edition Edition { get; set; }
        public List<Team> Teams { get; set; }
        public List<Round> Rounds { get; set; }
    }

    public class LeagueStage : Stage
    {
        private Edition edition;

        public LeagueStage(Edition edition)
        {
            this.edition = edition;
            Teams = edition.Teams;
        }
    }

    public class KnockoutStage : Stage
    {

    }
}