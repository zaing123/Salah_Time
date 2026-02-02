using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using SalahTimes.Models;

namespace SalahTimes.Controllers
{
    public class SalahTimesController : Controller
    {
        private readonly SalahTimesDbContext _context;

        public SalahTimesController(SalahTimesDbContext context)
        {
            _context = context;
        }

        // GET: SalahTimes
        public async Task<IActionResult> Index()
        {
            var salahTimes = _context.SalahTimes
                .Include(s => s.City);  // This is important


            return View(await salahTimes.ToListAsync());
        }

        // GET: SalahTimes/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var salahTime = await _context.SalahTimes
                .Include(s => s.City)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (salahTime == null)
            {
                return NotFound();
            }

            return View(salahTime);
        }

        // GET: SalahTimes/Create
        public IActionResult Create()
        {
            ViewData["CityId"] = new SelectList(_context.Cities, "Id", "CityName");

            return View();
        }

        // POST: SalahTimes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,CityId,Date,Fajr,Dhuhr,Asr,Maghrib,Isha")] SalahTime salahTime)
        {
            if (ModelState.IsValid)
            {
                _context.Add(salahTime);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CityId"] = new SelectList(_context.Cities, "Id", "CityName", salahTime.CityId);

            return View(salahTime);
        }

        // GET: SalahTimes/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var salahTime = await _context.SalahTimes.FindAsync(id);
            if (salahTime == null)
            {
                return NotFound();
            }
            ViewData["CityId"] = new SelectList(_context.Cities, "Id", "CityName", salahTime.CityId);

            return View(salahTime);
        }

        // POST: SalahTimes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,CityId,Date,Fajr,Dhuhr,Asr,Maghrib,Isha")] SalahTime salahTime)
        {
            if (id != salahTime.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(salahTime);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!SalahTimeExists(salahTime.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["CityId"] = new SelectList(_context.Cities, "Id", "CityName", salahTime.CityId);

            return View(salahTime);
        }

        // GET: SalahTimes/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var salahTime = await _context.SalahTimes
                .Include(s => s.City)

                .FirstOrDefaultAsync(m => m.Id == id);
            if (salahTime == null)
            {
                return NotFound();
            }

            return View(salahTime);
        }

        // POST: SalahTimes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var salahTime = await _context.SalahTimes.FindAsync(id);
            if (salahTime != null)
            {
                _context.SalahTimes.Remove(salahTime);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool SalahTimeExists(int id)
        {
            return _context.SalahTimes.Any(e => e.Id == id);
        }
    }
}
