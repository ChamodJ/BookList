import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [
    HttpClientModule
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
  }
}
