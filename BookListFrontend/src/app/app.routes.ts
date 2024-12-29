import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

export const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'addbook', component: NewBookComponent },
  { path: 'editbook/:id', component: EditBookComponent }
];
