using BookListApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BookListApi.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }


        public DbSet<Book> Book { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=CHAMOD;Initial Catalog=BookList;Integrated Security=True;Encrypt=False");
        }

    }
}
