using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceAPI.Data.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int UnitPrice { get; set; }
        public int OldPrice { get; set; }
        public string Status { get; set; }
        public string ImgUrl1 { get; set; }
        public string ImgUrl2 { get; set; }
        public string ImgUrl3 { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; } 
        public List<Size> Sizes { get; set; }
        public List<Color> Colors { get; set; }
        public List<Tag> Tags { get; set; }
        public List<Feature> Featurs { get; set; }
        public List<BillDetail> BillDetails { get; set; }
    }
}
