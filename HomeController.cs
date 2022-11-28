using Assignment1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using Assignment1.Data;
using Microsoft.EntityFrameworkCore;

namespace Assignment1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _context;
        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ContactAbout()
        {
            return View();
        }

        public async Task<IActionResult> ComOr()
        {
            if (!User.Identity.IsAuthenticated)
            {
                foreach (var post in _context.FeedbackPost)
                {
                    post.canIncreaseAgree = true;
                    
                   
                }
                await _context.SaveChangesAsync();
            }
            if (!User.Identity.IsAuthenticated)
            {
                foreach (var post in _context.FeedbackPost)
                {
                    post.canIncreaseDisagree = true;
                }   
            }
            await _context.SaveChangesAsync();
            
            var allFeedbacks = from result in _context.FeedbackPost
                                 orderby result.Date descending
                                 select result;

            return View(await allFeedbacks.ToListAsync());

            //return View(await _context.FeedbackPost.ToListAsync());
        }



        public IActionResult EmerTechs()
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
