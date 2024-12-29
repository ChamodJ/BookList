import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {

  bTitle: string = "";
  bAuthor: string = "";
  bISBN: string = "";
  bPubDate: string = "";

  bookId: string = "";

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.bookId = this.route.snapshot.paramMap.get('id') || "";
    this.loadBookDetails();
  }


  loadBookDetails() {
    if (this.bookId) {
      this.http.get(`http://localhost:5137/api/book/getbook/${this.bookId}`)
        .subscribe((resultData: any) => {

          this.bTitle = resultData.title;
          this.bAuthor = resultData.author;
          this.bISBN = resultData.isbn;
          this.bPubDate = resultData.publicationDate;
        }, (error) => {
          console.error("Error fetching book details:", error);
          alert("An error occurred while loading the book details.");
        });
    }
  }

  handleSubmit() {
    const updatedBook = {
      title: this.bTitle,
      author: this.bAuthor,
      isbn: this.bISBN,
      publicationDate: this.bPubDate
    };


    this.http.put(`http://localhost:5137/api/book/updatebook/${this.bookId}`, updatedBook)
      .subscribe((resultData: any) => {
        console.log("Book updated successfully:", resultData);
        alert("Book updated successfully!");
        this.router.navigate(['/']);
      }, (error) => {
        console.error("Error updating book:", error);
        alert("An error occurred while updating the book.");
      });
  }

  handleCancel() {
    this.router.navigate(['/']);
  }
}
