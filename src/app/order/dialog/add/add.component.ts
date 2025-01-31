import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { response } from '../../../shared/models/response.model';
import { CustomerService } from '../../../shared/services/customer.service';
import { BookService } from '../../../shared/services/book.service';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxChange, MatCheckboxModule} from '@angular/material/checkbox';
import { OrderService } from '../../../shared/services/order.service';
import { Order } from '../../../shared/models/order.model';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [MatFormField,MatInputModule,MatSelectModule,MatTableModule,NgIf,MatCheckboxModule,ReactiveFormsModule,FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{


    
    matDialogRef = inject(MatDialogRef);
    customerService=inject(CustomerService);
    bookService=inject(BookService);
    orderService=inject(OrderService)
    customers:response={data:[],errorMessage:"",success:true};
    books:response={data:[],errorMessage:"",success:true};
    booksSelected:number[]=[];
    selectedCustomer=0;
    
    ngOnInit(): void {
      this.customerService.getCustomers().subscribe(((response)=>{
        this.customers=response;
      }));

      this.bookService.getBooks().subscribe((response)=>{
        this.books=response;
      });
    }
    updateSelected($event: MatCheckboxChange,id: number) {

      if($event.checked)
        this.booksSelected.push(id);
      else
        this.booksSelected=this.booksSelected.filter(i=>i!==id);
     // {
       // let index= this.booksSelected.indexOf(id);
      //      console.log(index)
       
      //}
      //    console.log(this.booksSelected)
    }
    createOrder() {
      this.orderService.addOrder(this.selectedCustomer,this.booksSelected).subscribe((response)=>{
        this.matDialogRef.close(response);
      });
  
      }
      
}
