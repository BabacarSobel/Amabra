using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Amabra.Database;
using Amabra.Models;

namespace Amabra.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NationsController : ControllerBase
    {
        private readonly AmabraContext _context;

        public NationsController(AmabraContext context)
        {
            _context = context;
        }

        // GET: api/Nations
        [HttpGet]
        public IEnumerable<Nation> GetNations()
        {
            return _context.Nations;
        }

        // GET: api/Nations/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetNation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var nation = await _context.Nations.FindAsync(id);

            if (nation == null)
            {
                return NotFound();
            }

            return Ok(nation);
        }

        // PUT: api/Nations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNation([FromRoute] int id, [FromBody] Nation nation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nation.Id)
            {
                return BadRequest();
            }

            _context.Entry(nation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NationExists(id))
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

        // POST: api/Nations
        [HttpPost]
        public async Task<IActionResult> PostNation([FromBody] Nation nation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Nations.Add(nation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNation", new { id = nation.Id }, nation);
        }

        // DELETE: api/Nations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var nation = await _context.Nations.FindAsync(id);
            if (nation == null)
            {
                return NotFound();
            }

            _context.Nations.Remove(nation);
            await _context.SaveChangesAsync();

            return Ok(nation);
        }

        private bool NationExists(int id)
        {
            return _context.Nations.Any(e => e.Id == id);
        }
    }
}