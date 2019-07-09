using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Amabra.Database;
using Amabra.Models;
using Amabra.ViewModels;

namespace Amabra.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TournementsController : ControllerBase
    {
        private readonly AmabraContext _context;

        public TournementsController(AmabraContext context)
        {
            _context = context;
        }

        // GET: api/Tournements
        [HttpGet]
        public IEnumerable<Tournement> GetTournements()
        {
            return _context.Tournements;
        }

        // GET: api/Tournements/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTournement([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tournement = await _context.Tournements.FindAsync(id);

            if (tournement == null)
            {
                return NotFound();
            }

            return Ok(tournement);
        }

        // PUT: api/Tournements/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTournement([FromRoute] int id, [FromBody] Tournement tournement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tournement.Id)
            {
                return BadRequest();
            }

            _context.Entry(tournement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TournementExists(id))
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

        // POST: api/Tournements
        [HttpPost]
        public async Task<IActionResult> PostTournement([FromBody] TournementViewModel tournement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var toSave = new Tournement()
            {
                Id = tournement.Id,
                Name = tournement.Name,
                Nation = _context.Nations.Where(s => s.Name == tournement.Nation)?.FirstOrDefault(),
            };
            _context.Tournements.Add(toSave);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTournement", new { id = tournement.Id }, tournement);
        }

        // DELETE: api/Tournements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTournement([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tournement = await _context.Tournements.FindAsync(id);
            if (tournement == null)
            {
                return NotFound();
            }

            _context.Tournements.Remove(tournement);
            await _context.SaveChangesAsync();

            return Ok(tournement);
        }

        private bool TournementExists(int id)
        {
            return _context.Tournements.Any(e => e.Id == id);
        }
    }
}