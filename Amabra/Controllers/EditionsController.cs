﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Amabra.Database;
using Amabra.Models;
using Amabra.ViewModels;
using Amabra.Business;

namespace Amabra.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EditionsController : ControllerBase
    {
        private readonly AmabraContext _context;
        private readonly EditionService _editionService;

        public EditionsController(AmabraContext context)
        {
            _context = context;
            _editionService = new EditionService(_context);
        }

        // POST: api/Editions/5/Generate
        [HttpPost("{id}/Generate")]
        public async Task<IActionResult> GenerateEdition([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var edition = await _context.Editions.FindAsync(id);

            if (edition == null)
            {
                return NotFound();
            }

            _editionService.Generate(edition);

            return Ok("");
        }

        // GET: api/Editions
        [HttpGet]
        public IEnumerable<Edition> GetEditions()
        {
            return _context.Editions;
        }

        // GET: api/Editions/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEdition([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var edition = await _context.Editions.FindAsync(id);

            if (edition == null)
            {
                return NotFound();
            }

            return Ok(edition);
        }

        // PUT: api/Editions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEdition([FromRoute] int id, [FromBody] Edition edition)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != edition.Id)
            {
                return BadRequest();
            }

            _context.Entry(edition).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EditionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Editions
        [HttpPost]
        public async Task<IActionResult> PostEdition([FromBody] EditionViewModel edition)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var toSave = new Edition()
            {
                Id = edition.Id,
                Season = _context.Seasons.Where(s => s.Year == edition.Season)?.FirstOrDefault(),
                Tournement = _context.Tournements.Where(s => s.Name == edition.Tournement)?.FirstOrDefault(),
            };
            _context.Editions.Add(toSave);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEdition", new { id = edition.Id }, edition);
        }

        // DELETE: api/Editions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEdition([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var edition = await _context.Editions.FindAsync(id);
            if (edition == null)
            {
                return NotFound();
            }

            _context.Editions.Remove(edition);
            await _context.SaveChangesAsync();

            return Ok(edition);
        }

        private bool EditionExists(int id)
        {
            return _context.Editions.Any(e => e.Id == id);
        }
    }
}