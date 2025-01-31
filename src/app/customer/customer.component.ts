import { Component, inject, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { response } from '../shared/models/response.model';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import {MatTableModule} from '@angular/material/table';
import{MatIconModule} from '@angular/material/icon';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './dialog/add/add.component';
import { Customer } from '../shared/models/customer.model';
import { EditComponent } from './dialog/edit/edit.component';
import { DeleteComponent } from './dialog/delete/delete.component';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FooterComponent, HeaderComponent,MatIconModule,MatTableModule,NgIf,MatButtonModule,RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
customerService=inject(CustomerService)
customer:response={data:[],errorMessage:"",success:true};
matDialog=inject(MatDialog);
  ngOnInit():void {
    this.customerService.getCustomers().subscribe((response)=>{
    this.customer=response;
    console.log(this.customer);
   });
  }
  openAddDialog() { 
      const addDialogRef = this.matDialog.open(AddComponent, { });
      addDialogRef.afterClosed().subscribe(() => {
        this.customerService.getCustomers().subscribe((response)=>{
          this.customer=response;
         });
      });
  }
  
    openEditDialog(customer:Customer){
  
      const editDialogRef = this.matDialog.open(EditComponent, {data:{customer:customer} });
      editDialogRef.afterClosed().subscribe(() => {
        this.customerService.getCustomers().subscribe((response)=>{
          this.customer=response;
         });
      });
    }
    openDeleteDialog(customer:Customer){
  
      const deleteDialogRef = this.matDialog.open(DeleteComponent, {data:{customer:customer} });
      deleteDialogRef.afterClosed().subscribe(() => {
        this.customerService.getCustomers().subscribe((response)=>{
          this.customer=response;
         });
      });
    }
}
