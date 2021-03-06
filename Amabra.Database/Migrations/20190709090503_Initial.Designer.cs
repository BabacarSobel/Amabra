﻿// <auto-generated />
using System;
using Amabra.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Amabra.Database.Migrations
{
    [DbContext(typeof(AmabraContext))]
    [Migration("20190709090503_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Amabra.Models.Edition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("SeasonId");

                    b.Property<int?>("SeasonYear");

                    b.Property<int?>("TeamId");

                    b.Property<int?>("TournementId");

                    b.HasKey("Id");

                    b.HasIndex("TeamId");

                    b.HasIndex("TournementId");

                    b.HasIndex("SeasonId", "SeasonYear");

                    b.ToTable("Editions");
                });

            modelBuilder.Entity("Amabra.Models.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Score1");

                    b.Property<int>("Score2");

                    b.Property<int?>("Team1Id");

                    b.Property<int?>("Team2Id");

                    b.HasKey("Id");

                    b.HasIndex("Team1Id");

                    b.HasIndex("Team2Id");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("Amabra.Models.Goal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("GameId");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("Goal");
                });

            modelBuilder.Entity("Amabra.Models.Nation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Nations");
                });

            modelBuilder.Entity("Amabra.Models.Player", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ClubId");

                    b.Property<string>("Name");

                    b.Property<int?>("NationId");

                    b.Property<int?>("NationalTeamId");

                    b.HasKey("Id");

                    b.HasIndex("ClubId");

                    b.HasIndex("NationId");

                    b.HasIndex("NationalTeamId");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("Amabra.Models.Round", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("NumberOfTeams");

                    b.Property<int?>("StageId");

                    b.Property<int?>("TeamId");

                    b.HasKey("Id");

                    b.HasIndex("StageId");

                    b.HasIndex("TeamId");

                    b.ToTable("Rounds");
                });

            modelBuilder.Entity("Amabra.Models.Season", b =>
                {
                    b.Property<int>("Id");

                    b.Property<int>("Year");

                    b.HasKey("Id", "Year");

                    b.ToTable("Seasons");
                });

            modelBuilder.Entity("Amabra.Models.Stage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("EditionId");

                    b.HasKey("Id");

                    b.HasIndex("EditionId");

                    b.ToTable("Stage");
                });

            modelBuilder.Entity("Amabra.Models.Team", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Team");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Team");
                });

            modelBuilder.Entity("Amabra.Models.Tournement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.Property<int?>("NationId");

                    b.Property<int?>("TeamId");

                    b.HasKey("Id");

                    b.HasIndex("NationId");

                    b.HasIndex("TeamId");

                    b.ToTable("Tournements");
                });

            modelBuilder.Entity("Amabra.Models.Club", b =>
                {
                    b.HasBaseType("Amabra.Models.Team");

                    b.Property<int?>("NationId");

                    b.HasIndex("NationId");

                    b.ToTable("Club");

                    b.HasDiscriminator().HasValue("Club");
                });

            modelBuilder.Entity("Amabra.Models.NationalTeam", b =>
                {
                    b.HasBaseType("Amabra.Models.Team");

                    b.Property<int?>("NationId")
                        .HasColumnName("NationalTeam_NationId");

                    b.HasIndex("NationId");

                    b.ToTable("NationalTeam");

                    b.HasDiscriminator().HasValue("NationalTeam");
                });

            modelBuilder.Entity("Amabra.Models.Edition", b =>
                {
                    b.HasOne("Amabra.Models.Team")
                        .WithMany("Editions")
                        .HasForeignKey("TeamId");

                    b.HasOne("Amabra.Models.Tournement", "Tournement")
                        .WithMany("Editions")
                        .HasForeignKey("TournementId");

                    b.HasOne("Amabra.Models.Season", "Season")
                        .WithMany("Editions")
                        .HasForeignKey("SeasonId", "SeasonYear");
                });

            modelBuilder.Entity("Amabra.Models.Game", b =>
                {
                    b.HasOne("Amabra.Models.Team", "Team1")
                        .WithMany()
                        .HasForeignKey("Team1Id");

                    b.HasOne("Amabra.Models.Team", "Team2")
                        .WithMany()
                        .HasForeignKey("Team2Id");
                });

            modelBuilder.Entity("Amabra.Models.Goal", b =>
                {
                    b.HasOne("Amabra.Models.Game", "Game")
                        .WithMany("Goals")
                        .HasForeignKey("GameId");
                });

            modelBuilder.Entity("Amabra.Models.Player", b =>
                {
                    b.HasOne("Amabra.Models.Club", "Club")
                        .WithMany("Players")
                        .HasForeignKey("ClubId");

                    b.HasOne("Amabra.Models.Nation", "Nation")
                        .WithMany()
                        .HasForeignKey("NationId");

                    b.HasOne("Amabra.Models.NationalTeam", "NationalTeam")
                        .WithMany("Players")
                        .HasForeignKey("NationalTeamId");
                });

            modelBuilder.Entity("Amabra.Models.Round", b =>
                {
                    b.HasOne("Amabra.Models.Stage", "Stage")
                        .WithMany()
                        .HasForeignKey("StageId");

                    b.HasOne("Amabra.Models.Team")
                        .WithMany("Rounds")
                        .HasForeignKey("TeamId");
                });

            modelBuilder.Entity("Amabra.Models.Stage", b =>
                {
                    b.HasOne("Amabra.Models.Edition", "Edition")
                        .WithMany("Stages")
                        .HasForeignKey("EditionId");
                });

            modelBuilder.Entity("Amabra.Models.Tournement", b =>
                {
                    b.HasOne("Amabra.Models.Nation", "Nation")
                        .WithMany("Tournements")
                        .HasForeignKey("NationId");

                    b.HasOne("Amabra.Models.Team")
                        .WithMany("Tournements")
                        .HasForeignKey("TeamId");
                });

            modelBuilder.Entity("Amabra.Models.Club", b =>
                {
                    b.HasOne("Amabra.Models.Nation", "Nation")
                        .WithMany("Clubs")
                        .HasForeignKey("NationId");
                });

            modelBuilder.Entity("Amabra.Models.NationalTeam", b =>
                {
                    b.HasOne("Amabra.Models.Nation", "Nation")
                        .WithMany()
                        .HasForeignKey("NationId");
                });
#pragma warning restore 612, 618
        }
    }
}
