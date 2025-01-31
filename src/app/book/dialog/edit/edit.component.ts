import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { BookService } from '../../../shared/services/book.service';
import { Book } from '../../../shared/models/book.model';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  bookService = inject(BookService);
  matDialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA) as {book:Book};
  updateBook(){
    this.bookService.updateBook(this.data.book.id,this.data.book.title,this.data.book.author,this.data.book.isbn).subscribe((response)=>{
      this.matDialogRef.close(response.data);
    });
  }
}
