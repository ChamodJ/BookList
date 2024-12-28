import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-book',
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss'
})
export class NewBookComponent {

  bTitle : string = ""
  bAuthor : string = ""
  bISBN : string = ""
  bPubDate : string = ""

  constructor(private http: HttpClient, private router: Router)
    {

    }

  handleSubmit() {

    let bodyData = {
      "title" : this.bTitle,
      "author" : this.bAuthor,
      "isbn" : this.bISBN,
      "publicationDate" : this.bPubDate
    }

    this.http.post("http://localhost:5137/api/book/newbook", bodyData)
    .subscribe((resultData : any) => {
      console.log(resultData);
      alert("Book added Successfully")
    },
    (error) => {
      console.error("error" , error)
      alert("An error occurred while adding the book");
    }
  )
  }
}
