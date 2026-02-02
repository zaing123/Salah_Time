using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SalahTimes.Models;

namespace SalahTimes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalahTimesApiController : ControllerBase
    {
        private readonly SalahTimesDbContext _context;

        public SalahTimesApiController(SalahTimesDbContext context)
        {
            _context = context;
        }

        // GET: api/SalahTimesApi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalahTime>>> GetSalahTimes()
        {
            var salahTimes = await _context.SalahTimes
                 .Include(s => s.City)
                 .Select(s => new
                 {
                     s.Id,
                     s.CityId,
                     CityName = s.City.CityName,
                     s.Date,
                     s.Fajr,
                     s.Dhuhr,
                     s.Asr,
                     s.Maghrib,
                     s.Isha
                 })
                 .ToListAsync();

            return Ok(salahTimes); // JSON format
        }

        // GET: api/SalahTimesApi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SalahTime>> GetSalahTime(int id)
        {
            var salahTime = await _context.SalahTimes.FindAsync(id);

            if (salahTime == null)
            {
                return NotFound();
            }

            return salahTime;
        }

        // PUT: api/SalahTimesApi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalahTime(int id, SalahTime salahTime)
        {
            if (id != salahTime.Id)
            {
                return BadRequest();
            }

            _context.Entry(salahTime).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalahTimeExists(id))
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

        // POST: api/SalahTimesApi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SalahTime>> PostSalahTime(SalahTime salahTime)
        {
            _context.SalahTimes.Add(salahTime);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSalahTime", new { id = salahTime.Id }, salahTime);
        }

        // DELETE: api/SalahTimesApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalahTime(int id)
        {
            var salahTime = await _context.SalahTimes.FindAsync(id);
            if (salahTime == null)
            {
                return NotFound();
            }

            _context.SalahTimes.Remove(salahTime);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SalahTimeExists(int id)
        {
            return _context.SalahTimes.Any(e => e.Id == id);
        }
    }
}
