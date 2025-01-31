import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import{MatIconModule} from '@angular/material/icon'
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './dialog/add/add.component';
import { EditComponent } from './dialog/edit/edit.component';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../shared/services/book.service';
import { response } from '../shared/models/response.model';
import { Book } from '../shared/models/book.model';
import { DeleteComponent } from './dialog/delete/delete.component';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink,HeaderComponent,FooterComponent,MatButtonModule,MatFormFieldModule,MatTableModule,NgIf,MatIconModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  books: response={data:[],errorMessage:"",success:true};

  matDialog=inject(MatDialog);
  router = inject(Router);
  bookService = inject(BookService);
  ngOnInit():void {
      this.bookService.getBooks().subscribe((response)=>{
      this.books=response;
      console.log(this.books);
     });
  }
  openAddDialog() { 
    const addDialogRef = this.matDialog.open(AddComponent, { });
    addDialogRef.afterClosed().subscribe(() => {
      this.bookService.getBooks().subscribe((response)=>{
        this.books=response;
        console.log(this.books);
       });
    });
  }

  openEditDialog(book:Book){

    const editDialogRef = this.matDialog.open(EditComponent, {data:{book:book} });
    editDialogRef.afterClosed().subscribe(() => {
      this.bookService.getBooks().subscribe((response)=>{
        this.books=response;
        console.log(this.books);
       });
    });
  }
  openDeleteDialog(book:Book){

    const deleteDialogRef = this.matDialog.open(DeleteComponent, {data:{book:book} });
    deleteDialogRef.afterClosed().subscribe(() => {
      this.bookService.getBooks().subscribe((response)=>{
        this.books=response;
       });
    });
  }
}
