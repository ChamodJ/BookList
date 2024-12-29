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
            optionsBuilder.UseSqlServer("");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Book>().HasData(
                new Book
                {
                    Id = 1,
                    Title = "To Kill a Mockingbird",
                    Author = "Harper Lee",
                    ISBN = "978-0-06-112008-4",
                    publicationDate = new DateTime(1960, 7, 11)
                },
                new Book
                {
                    Id = 2,
                    Title = "1984",
                    Author = "George Orwell",
                    ISBN = "978-0-452-28423-4",
                    publicationDate = new DateTime(1949, 6, 8)
                },
                new Book
                {
                    Id = 3,
                    Title = "The Great Gatsby",
                    Author = "F. Scott Fitzgerald",
                    ISBN = "978-0-7432-7356-5",
                    publicationDate = new DateTime(1925, 4, 10)
                }
            );
        }

    }
}
