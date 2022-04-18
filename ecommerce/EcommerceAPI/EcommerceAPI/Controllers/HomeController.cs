using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using EcommerceAPI.Data.Entities;
using EcommerceAPI.Data;
using System.Security.Claims;
using System;

namespace EcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly SignInManager<Customer> _signInManager;
        private readonly UserManager<Customer> _userManager;
        private readonly ECommerceAPIDbContext _context;
        public HomeController(ILogger<HomeController> logger, SignInManager<Customer> signInManager,
            UserManager<Customer> userManager, ECommerceAPIDbContext context)
        {
            _logger = logger;
            _userManager = userManager;
            _context = context;
            _signInManager = signInManager;
        }
        [HttpPost]
        public async Task<string> PostLoginAsync(Customer customers)
        {
            var customer = await _userManager.FindByNameAsync(customers.UserName);
            if (customer == null)
            {
                return null;
            }
            var result = await _signInManager.PasswordSignInAsync(customers.UserName, customers.PasswordHash, false, false);
            if (result.Succeeded)
            {
                return customer.UserName;
            }
            return null;
        }
        

        [Route("PostRegisterAsync")]
        public async Task<bool> PostRegisterAsync(Customer customers)
        {
            var customer = await _userManager.FindByNameAsync(customers.UserName);
            if (customer != null)
            {
                return false;
            }
            var newCustomer = new Customer()
            {
                Id = System.Guid.NewGuid(),
                UserName = customers.UserName,
                PhoneNumber = customers.PhoneNumber,
                FullName = customers.FullName,
                Email = customers.Email,
                Birthday=customers.Birthday,
                Gender=customers.Gender
            };
            var result = await _userManager.CreateAsync(newCustomer, customers.PasswordHash);
            if (result.Succeeded)
            {
                return true;
            }
            return false;
        }
    }
}
