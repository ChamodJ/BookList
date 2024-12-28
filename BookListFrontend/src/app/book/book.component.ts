import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  bookArray : any[] = []
  isResultLoaded = false
  isUpdateFormActive = false

  //Form Data
  bTitle : string = ""
  bAuthor : string = ""
  bISBN : string = ""
  bPubDate : string = ""

  currentBookId = ""

  constructor(private http: HttpClient, private router: Router)
  {
    this.getAllBooks()
  }

  getAllBooks() {
    this.http.get("http://localhost:5137/api/book/getbooks")
    .subscribe((resultData: any) => {
      this.isResultLoaded = true
      console.log(resultData)
      this.bookArray = resultData
    })
  }

  handleAddNewButton() {
    this.router.navigate(["addbook"])
  }

  handleEditButton( id : number) {
    this.router.navigate([ 'editbook', id])
  }

  handleDeleteButton ( id : number ){
    this.http.delete(`http://localhost:5137/api/book/deletebook/${id}`)
    .subscribe(( resultData : any ) => {
      console.log("Book deleted successfully:", resultData);
      alert("Book deleted successfully!");
      this.getAllBooks();
    } ,
    (error) => {
      console.error("Error deleting book:", error);
      alert("An error occurred while deleting the book.");
    })
  }
}
