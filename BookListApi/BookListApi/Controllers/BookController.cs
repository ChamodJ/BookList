using BookListApi.Data;
using BookListApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookListApi.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly ApplicationDBContext _dBContext;

        public BookController(ApplicationDBContext dbContext)
        {
            this._dBContext = dbContext;
        }

        [HttpGet]
        [Route("getbooks")]
        public async Task<IEnumerable<Book>> GetBooks()
        {
            return await _dBContext.Book.ToListAsync();
        }

        [HttpGet]
        [Route("getbook/{id}")]
        public async Task<ActionResult<Task>> getBookById(int id)
        {
            var book = await _dBContext.Book.FindAsync(id);

            if (book == null)
            {
                return NotFound(new { message = "Book not found" });
            }
            else
            {
                return Ok(book);
            }

            
        }

        [HttpPost]
        [Route("newbook")]
        public async Task<Book> AddBook(Book objBook)
        {   
            _dBContext.Book.Add(objBook);
            await _dBContext.SaveChangesAsync();
            return objBook;
        }

        [HttpPatch]
        [Route("updatebook/{id}")]
        public async Task<Book> UpdateBook(Book objBook)
        {
            _dBContext.Entry(objBook).State = EntityState.Modified;
            await _dBContext.SaveChangesAsync();
            return objBook;
        }

        [HttpDelete]
        [Route("deletebook/{id}")]
        public bool DeleteBook(int id)
        {
            bool a = false;
            var book = _dBContext.Book.Find(id);

            if (book != null) 
            {
                a = true;
                _dBContext.Entry(book).State = EntityState.Deleted;
                _dBContext.SaveChanges();
                return a;
            }
            else
            {
                return a;
            }
        }

    }
}
