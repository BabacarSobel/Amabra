using Amabra.Business;
using Amabra.Models;
using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace Amabra.Tests
{
    [TestFixture]
    public class EditionServiceTest
    {
        

        [Test]
        public void LeagueGenerationTest()
        {
            Amabra.Database.AmabraContext Context = null;
            EditionService Service = new EditionService(Context);
            Edition edition = new Edition();
            edition.Tournement = new Tournement();
            edition.Teams = new List<Team>();
            edition.Tournement.Type = "league";
            edition.Tournement.numberOfTeams = 10;
            for (var i=0; i <10; i++)
            {
                edition.Teams.Add(new Team(i.ToString()));
            }
            Service.Generate(edition);
        }
    }
}
