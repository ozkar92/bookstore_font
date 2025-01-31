import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { BookService } from '../../../shared/services/book.service';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [MatFormFieldModule,FormsModule,MatInputModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  bookService = inject(BookService);
  matDialogRef = inject(MatDialogRef);
  addBook(title:string,author:string,isbn:string){
    this.bookService.addBook(title,author,isbn).subscribe((response)=>{
      this.matDialogRef.close(response.data);
    });
  }
}
