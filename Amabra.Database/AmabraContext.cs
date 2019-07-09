using Amabra.Models;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;

namespace Amabra.Database
{
    public class AmabraContext : DbContext
    {
        public DbSet<Player> Players { get; set; }
        public DbSet<Club> Clubs { get; set; }
        public DbSet<NationalTeam> NationalTeams { get; set; }
        public DbSet<Tournement> Tournements { get; set; }
        public DbSet<Edition> Editions { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Season> Seasons { get; set; }
        public DbSet<Nation> Nations { get; set; }
        public DbSet<Round> Rounds { get; set; }
        public DbSet<Stage> Stages { get; set; }

        public AmabraContext(DbContextOptions options) : base(options)
        {
        }

        protected AmabraContext()
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Season>()
                .HasKey(s => new {s.Id, s.Year});
        }
    }
}
