import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [
    HttpClientModule,
    CommonModule
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

  constructor(private http: HttpClient)
  {
    this.getAllBooks()
  }

  getAllBooks() {
    console.log("Inside getAllBooks")
    this.http.get("http://localhost:5137/api/book/getbooks")
    .subscribe((resultData: any) => {
      this.isResultLoaded = true
      console.log(resultData)
      this.bookArray = resultData
    })
  }
}
