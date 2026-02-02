using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SalahTimes.Models;
using System.Diagnostics;

namespace SalahTimes.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly SalahTimesDbContext _context;

        public HomeController(ILogger<HomeController> logger, SalahTimesDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            var totalCities = _context.Cities.Count();
            var totalSalahTimes = _context.SalahTimes.Count();
            var totalUsers = _context.Users.Count();

            ViewData["TotalCities"] = totalCities;
            ViewData["TotalSalahTimes"] = totalSalahTimes;
            ViewData["TotalUsers"] = totalUsers;

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
