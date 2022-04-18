using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EcommerceAPI.Data;
using EcommerceAPI.Data.Entities;

namespace EcommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly ECommerceAPIDbContext _context;
        public ProductController(ECommerceAPIDbContext context)
        {
            _context = context;
        }
        [Route("GetSellerProduct")]
        public async Task<ActionResult<IEnumerable<Product>>> GetSellerProduct()
        {
            var sellingProduct = await (from l in _context.Product
                                        where l.Status == "BestSeller"
                                        select l).ToListAsync();
            return sellingProduct;
        }
        [Route("GetNewProduct")]
        public async Task<ActionResult<IEnumerable<Product>>> GetNewProduct()
        {
            var newProduct = await (from l in _context.Product
                                    where l.Status == "New"
                                    select l).ToListAsync();
            return newProduct;
        }
        [Route("GetPromotionProduct")]
        public async Task<ActionResult<IEnumerable<Product>>> GetPromotionProduct()
        {
            var popularProduct = await (from l in _context.Product
                                        where l.Status == "Khuyenmai"
                                        select l).ToListAsync();
            return popularProduct;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProduct()
        {
            var Product = await (from l in _context.Product
                                 select l).ToListAsync();
            return Product;
        }
        [Route("GetColor")]
        public async Task<ActionResult<IEnumerable<Color>>> GetColor()
        {
            var Color = await (from l in _context.Color
                                 select l).ToListAsync();
            return Color;
        }
        [Route("GetSize")]
        public async Task<ActionResult<IEnumerable<Size>>> GetSize()
        {
            var Color = await (from l in _context.Size
                               select l).ToListAsync();
            return Color;
        }
        [Route("GetTag")]
        public async Task<ActionResult<IEnumerable<Tag>>> GetTag()
        {
            var Color = await (from l in _context.Tag
                               select l).ToListAsync();
            return Color;
        }
        [Route("GetFeature")]
        public async Task<ActionResult<IEnumerable<Feature>>> GetFeature()
        {
            var Color = await (from l in _context.Feature
                               select l).ToListAsync();
            return Color;
        }

        [HttpPost]
        public async Task<bool> PostAddToCartAsync(BillCart Bill)
        {
            var customer = await (from c in _context.Customer
                                  where c.UserName == Bill.UserName
                                  select c).FirstOrDefaultAsync();
            var currentCart = await (from b in _context.Bill
                                     where b.CustomerId == customer.Id && b.PaymentMethod == string.Empty
                                     select b).FirstOrDefaultAsync();
            var billId = new int();
            if (currentCart != null)
            {
                billId = currentCart.BillId;
                var currentFoodInCart = await (from bd in _context.BillDetail
                                               where bd.BillId == billId && bd.ProductId == Bill.productId && bd.Color==Bill.color && bd.Size==Bill.size
                                               select bd).FirstOrDefaultAsync();
                if (currentFoodInCart != null)
                {
                    currentFoodInCart.Quantity = 1;
                    currentFoodInCart.UnitPrice = Bill.unitPrice;
                    currentFoodInCart.TotalPrice = Bill.unitPrice;
                    currentFoodInCart.Color = Bill.color;
                    currentFoodInCart.Size = Bill.size;
                    currentFoodInCart.ProductName = Bill.name;
                    _context.SaveChanges();
                }
                else
                {
                    var newBillDetail = new BillDetail()
                    {
                        BillId = billId,
                        ProductId = Bill.productId,
                        ProductName = Bill.name,
                        Size = Bill.size,
                        Color = Bill.color,
                        Quantity = Bill.quantity,
                        UnitPrice = Bill.unitPrice,
                        TotalPrice = Bill.unitPrice * Bill.quantity
                    };
                    currentCart.TotalPrice += Bill.unitPrice * Bill.quantity;
                    _context.SaveChanges();
                    _context.BillDetail.Add(newBillDetail);
                    _context.SaveChanges();

                }                
                return true;
            }
            else
            {
                var newBill = new Bill()
                {
                    CustomerId = customer.Id,
                    TotalPrice = Bill.TotalPrice * Bill.quantity,
                    PaymentMethod = string.Empty,
                    DateCreatBill = DateTime.Now
                };
                _context.Bill.Add(newBill);
                _context.SaveChanges();
                var billidd = await (from b in _context.Bill
                                     where b.CustomerId == customer.Id && b.PaymentMethod == string.Empty
                                     select b.BillId).FirstOrDefaultAsync();
                var newBillDetail = new BillDetail()
                {
                    BillId = billidd,
                    ProductId = Bill.productId,
                    UnitPrice = Bill.unitPrice,
                    Quantity = Bill.quantity,
                    TotalPrice = Bill.TotalPrice * Bill.quantity
                };
                _context.BillDetail.Add(newBillDetail);
                _context.SaveChanges();
                var newBillId = await (from b in _context.Bill
                                       where b.BillId == billId
                                       select b).FirstOrDefaultAsync();
                newBillId.TotalPrice = (from bd in _context.BillDetail
                                        where bd.BillId == billId
                                        select bd).Sum(x => x.TotalPrice);
                return true;
            }
        }
        [Route("GetBill")]
        public async Task<ActionResult<IEnumerable<CartDetail>>> GetBill(Bill billUser)
        {
            var customer = await (from c in _context.Customer
                                  where c.UserName == billUser.UserName
                                  select c).FirstOrDefaultAsync();
            var customerId = customer.Id;
            var billId = await (from b in _context.Bill
                          where b.CustomerId == customerId && b.PaymentMethod == string.Empty
                          select b).FirstOrDefaultAsync();
            var bill = await (from cd in _context.BillDetail
                              where cd.BillId == billId.BillId
                              select new CartDetail
                              {
                                  BillId=cd.BillId,
                                  Color=cd.Color,
                                  ProductId=cd.ProductId,
                                  Name=cd.ProductName,
                                  Quantity=cd.Quantity,
                                  Size=cd.Size,
                                  TotalPrice=cd.TotalPrice,
                                  UnitPrice=cd.UnitPrice
                              }).ToListAsync();
            return bill;
        }
        
        [Route("PostBillDetail")]
        public async Task<bool> PostBillDetail(List<CartDetail> Bill)
        {
            var customer = await (from c in _context.Customer
                                  where c.UserName == Bill[0].User
                                  select c).FirstOrDefaultAsync();
            if (customer!=null)
            {
                var currentCart = await (from b in _context.Bill
                                         where b.CustomerId == customer.Id && b.PaymentMethod == string.Empty
                                         select b).FirstOrDefaultAsync();
                
                if (currentCart != null)
                {
                    var billId = currentCart.BillId;
                    currentCart.PaymentMethod = Bill[0].PaymentMethod;
                    currentCart.Thon = Bill[0].Thon;
                    currentCart.Xa = Bill[0].Xa;
                    currentCart.Huyen = Bill[0].Huyen;
                    currentCart.Tinh = Bill[0].Tinh;
                    currentCart.TotalPrice = Bill[0].TotalPrice;
                    currentCart.PhoneNumber = Bill[0].PhoneNumber;
                    currentCart.DateCreatBill = DateTime.Now;
                    for (int i = 1; i < Bill.Count(); i++)
                    {
                        var currentProductInCart = await (from bd in _context.BillDetail
                                                       where bd.BillId == billId && bd.ProductId == Bill[i].ProductId && bd.Color == Bill[i].Color && bd.Size == Bill[i].Size
                                                       select bd).FirstOrDefaultAsync();
                        if (currentProductInCart != null)
                        {
                            currentProductInCart.Quantity = Bill[i].Quantity;
                            currentProductInCart.UnitPrice = Bill[i].UnitPrice;
                            currentProductInCart.TotalPrice = Bill[i].UnitPrice* Bill[i].Quantity;
                            currentProductInCart.Color = Bill[i].Color;
                            currentProductInCart.Size = Bill[i].Size;
                            _context.SaveChanges();
                        }
                        else
                        {
                            var newBillDetail = new BillDetail()
                            {
                                BillId = billId,
                                ProductId = Bill[i].ProductId,
                                UnitPrice = Bill[i].UnitPrice,
                                Quantity = Bill[i].Quantity,
                                TotalPrice = Bill[i].UnitPrice * Bill[i].Quantity,
                                Color = Bill[i].Color,
                                Size = Bill[i].Size,
                                ProductName = Bill[i].Name
                            };
                            _context.BillDetail.Add(newBillDetail);
                            _context.SaveChanges();
                        }
                        
                    }
                    var newBillId = await (from b in _context.Bill
                                           where b.BillId == billId
                                           select b).FirstOrDefaultAsync();
                    newBillId.TotalPrice = (from bd in _context.BillDetail
                                            where bd.BillId == billId
                                            select bd).Sum(x => x.TotalPrice);
                    _context.SaveChanges();

                }
                else
                {

                    var newBill = new Bill()
                    {
                        CustomerId = customer.Id,
                        TotalPrice = Bill[0].TotalPrice,
                        PaymentMethod = Bill[0].PaymentMethod,
                        DateCreatBill = DateTime.Now,
                        Thon = Bill[0].Thon,
                        Xa = Bill[0].Xa,
                        Huyen = Bill[0].Huyen,
                        Tinh = Bill[0].Tinh,
                        PhoneNumber = Bill[0].PhoneNumber,
                    };
                    _context.Bill.Add(newBill);
                    _context.SaveChanges();
                    var billId = (from b in _context.Bill
                                  select b.BillId).Max();
                    for (int i = 1; i < Bill.Count(); i++)
                    {
                        var newBillDetail = new BillDetail()
                        {
                            BillId = billId,
                            ProductId = Bill[i].ProductId,
                            UnitPrice = Bill[i].UnitPrice,
                            Quantity = Bill[i].Quantity,
                            TotalPrice = Bill[i].UnitPrice * Bill[i].Quantity,
                            Color = Bill[i].Color,
                            Size = Bill[i].Size,
                            ProductName = Bill[i].Name
                        };
                        _context.BillDetail.Add(newBillDetail);
                        _context.SaveChanges();
                    }
                    var newBillId = await (from b in _context.Bill
                                           where b.BillId == billId
                                           select b).FirstOrDefaultAsync();
                    newBillId.TotalPrice = (from bd in _context.BillDetail
                                            where bd.BillId == billId
                                            select bd).Sum(x => x.TotalPrice);
                    _context.SaveChanges();

                }
                return true;
            }
            else
            {
                var customerId = System.Guid.NewGuid();
                var newBill = new Bill()
                {
                    CustomerId = customerId,
                    PaymentMethod = Bill[0].PaymentMethod,
                    DateCreatBill = DateTime.Now,
                    Thon = Bill[0].Thon,
                    Xa = Bill[0].Xa,
                    Huyen = Bill[0].Huyen,
                    Tinh = Bill[0].Tinh,
                    PhoneNumber = Bill[0].PhoneNumber
                };
                _context.Bill.Add(newBill);
                _context.SaveChanges();
                var billId = (from b in _context.Bill
                              select b.BillId).Max();
                for (int i = 1; i < Bill.Count(); i++)
                {
                    var newBillDetail = new BillDetail()
                    {
                        BillId = billId,
                        ProductId = Bill[i].ProductId,
                        UnitPrice = Bill[i].UnitPrice,
                        Quantity = Bill[i].Quantity,
                        TotalPrice = Bill[i].UnitPrice * Bill[i].Quantity,
                        Color = Bill[i].Color,
                        Size = Bill[i].Size,
                        ProductName = Bill[i].Name
                    };
                    _context.BillDetail.Add(newBillDetail);
                    _context.SaveChanges();
                }

                var newBillId = await (from b in _context.Bill
                                       where b.BillId == billId
                                       select b).FirstOrDefaultAsync();
                newBillId.TotalPrice = (from bd in _context.BillDetail
                                        where bd.BillId == billId
                                        select bd).Sum(x => x.TotalPrice);
                _context.SaveChanges();
                return true;
            }
            
        }

    }
}
