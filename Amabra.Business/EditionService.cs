using Amabra.Database;
using Amabra.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Amabra.Business
{
    public interface IEditionService{
        void Generate(Edition edition);
    }

    public class EditionService : IEditionService
    {
        AmabraContext dbContext;
        public const string LEAGUE = "league";
        public const string KNOCKOUT = "Knockout";
        public const string LK = "GroupThenKnockout";

        public EditionService(AmabraContext context)
        {
            this.dbContext = context;
        }

        public void Generate(Edition edition)
        {
            if(edition.Tournement != null)
            {
                if (edition.Tournement.Type == LEAGUE)
                    GenerateLeague(edition);
                if (edition.Tournement.Type == KNOCKOUT)
                    GenerateKnockout(edition);
                if (edition.Tournement.Type == LK)
                    GenerateLk(edition);
            }
        }

        private void GenerateLk(Edition edition)
        {
            throw new NotImplementedException();
        }

        private void GenerateKnockout(Edition edition)
        {
            throw new NotImplementedException();
        }

        private void GenerateLeague(Edition edition)
        {
            var teamsNumber = edition.Tournement.numberOfTeams;
            var leagueStage = new LeagueStage(edition);
            var first = leagueStage.Teams[0];
            var queueH = new Queue<Team>();
            var queueA = new Queue<Team>();
            queueH.Enqueue(first);
            queueA.Enqueue(leagueStage.Teams[1]);
            for(var i = 2; i<= teamsNumber / 2; i++)
            {
                queueH.Enqueue(leagueStage.Teams[i]);
                queueA.Enqueue(leagueStage.Teams[i +(teamsNumber/2)-1]);
            }
            Team TopQueueH;
            Team TopQueueA;
            // OK

            //TODO DELETE
            leagueStage.Rounds = new List<Round>();

            for (var i = 0; i < (teamsNumber - 1); i++)
            {
                var rd = new Round();
                rd.Stage = leagueStage;
                leagueStage.Rounds.Add(rd);
                // TODO DELETE
                //rd.Games = new List<Game>();
                var j = 0;
                while (j < teamsNumber / 2)
                {
                    TopQueueH = queueH.Dequeue();
                    TopQueueA = queueA.Dequeue();
                    var game = new Game();
                    game.Round = rd;
                    game.Team1 = TopQueueH;
                    game.Team2 = TopQueueA;
                    rd.Games.Add(game);
                    if (TopQueueH == first)
                    {
                        queueH.Enqueue(TopQueueH);
                        queueH.Enqueue(TopQueueA);
                    }
                    else if( j == ((teamsNumber / 2) - 1))
                    {
                        queueA.Enqueue(TopQueueA);
                        queueA.Enqueue(TopQueueH);
                    }
                    else
                    {
                        queueH.Enqueue(TopQueueH);
                        queueA.Enqueue(TopQueueA);
                    }

                    j++;
                }
            }

            dbContext.Stages.Add(leagueStage);
        }
    }
}
