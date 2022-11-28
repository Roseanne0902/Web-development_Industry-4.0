using Assignment1.Data;
using Assignment1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Controllers
{
    public class FeedbackPostsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public FeedbackPostsController(ApplicationDbContext context)
        {
            _context = context;
        }
        [Authorize(Roles = "Manager")]
        // GET: FeedbackPosts
        public async Task<IActionResult> Index()
        {
            return View(await _context.FeedbackPost.ToListAsync());
        }

        // GET: FeedbackPosts/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedbackPost = await _context.FeedbackPost
                .FirstOrDefaultAsync(m => m.Id == id);
            if (feedbackPost == null)
            {
                return NotFound();
            }

            return View(feedbackPost);
            
        }

        // GET: FeedbackPosts/Create
        [Authorize(Roles = "Manager, RegisteredUser")]
        public IActionResult Create()
        {
            FeedbackPost df = new FeedbackPost();
            df.Date = DateTime.Now;
            df.UserName = User.Identity.Name;
            

            return View(df);
            //return View();
        }

        // POST: FeedbackPosts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Manager, RegisteredUser")]
        public async Task<IActionResult> Create([Bind("Id,Date,UserName,Heading,StarRating,Feedback,Agree,Disagree,CompanyOrganisationName")] FeedbackPost feedbackPost)
        {
            if (ModelState.IsValid)
            {
                _context.Add(feedbackPost);
                await _context.SaveChangesAsync();
                return RedirectToAction("ComOr", "Home", "fbheading");
            }
            return View(feedbackPost);
        }

        // GET: FeedbackPosts/Edit/5
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedbackPost = await _context.FeedbackPost.FindAsync(id);
            if (feedbackPost == null)
            {
                return NotFound();
            }
            
            feedbackPost.Date = DateTime.Now;
            feedbackPost.UserName = User.Identity.Name;

            
            return View(feedbackPost);
        }

        // POST: FeedbackPosts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Date,UserName,Heading,StarRating,Feedback,Agree,Disagree,CompanyOrganisationName")] FeedbackPost feedbackPost)
        {
            if (id != feedbackPost.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(feedbackPost);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FeedbackPostExists(feedbackPost.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("ComOr", "Home", "fbheading");
            }
            return View(feedbackPost);
        }

        // GET: FeedbackPosts/Delete/5
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedbackPost = await _context.FeedbackPost
                .FirstOrDefaultAsync(m => m.Id == id);
            if (feedbackPost == null)
            {
                return NotFound();
            }

            return View(feedbackPost);
        }

        // POST: FeedbackPosts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var feedbackPost = await _context.FeedbackPost.FindAsync(id);
            _context.FeedbackPost.Remove(feedbackPost);
            await _context.SaveChangesAsync();
            return RedirectToAction("ComOr", "Home", "fbheading");
        }

        private bool FeedbackPostExists(int id)
        {
            return _context.FeedbackPost.Any(e => e.Id == id);
        }


        public async Task<IActionResult> IncreaseAgree(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedbackPost = await _context.FeedbackPost.FindAsync(id);
            if (feedbackPost == null)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                try
                {
                    if (User.Identity.IsAuthenticated && 
                        feedbackPost.canIncreaseAgree)
                    {
                        feedbackPost.Agree++;
                        feedbackPost.canIncreaseAgree = false;
                        _context.Update(feedbackPost);
                        await _context.SaveChangesAsync();
                    }
                }


                catch (DbUpdateConcurrencyException)
                {
                    if (!FeedbackPostExists(feedbackPost.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("ComOr", "Home", "fbheading");
            }
            return RedirectToAction("ComOr", "Home", "fbheading");
        }

        public async Task<IActionResult> IncreaseDisagree(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedbackPost = await _context.FeedbackPost.FindAsync(id);
            if (feedbackPost == null)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                try
                {
                    if (User.Identity.IsAuthenticated &&
                        feedbackPost.canIncreaseDisagree)
                    {
                        feedbackPost.Disagree++;
                        feedbackPost.canIncreaseDisagree = false;
                        _context.Update(feedbackPost);
                        await _context.SaveChangesAsync();
                    }
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FeedbackPostExists(feedbackPost.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("ComOr","Home","fbheading");
            }
            return RedirectToAction("ComOr", "Home", "fbheading");
        }


    }
}
