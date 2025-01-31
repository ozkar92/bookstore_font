import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookService } from '../../../shared/services/book.service';
import { Book } from '../../../shared/models/book.model';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
 bookService = inject(BookService);
 matDialogRef = inject(MatDialogRef);
 data = inject(MAT_DIALOG_DATA) as {book:Book};
 deleteBook(){
  this.bookService.deleteBook(this.data.book.id).subscribe((response)=>{
    this.matDialogRef.close(response.data);
  });
 }
}
