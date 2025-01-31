import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { HeaderComponent } from "../shared/components/header/header.component";
import {MatTableModule} from '@angular/material/table';
import{MatIconModule} from '@angular/material/icon';
import { CommonModule, NgIf } from '@angular/common';
import { OrderService } from '../shared/services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AddComponent } from './dialog/add/add.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FooterComponent, HeaderComponent,MatIconModule,MatTableModule,NgIf,CommonModule,MatFormField,MatInputModule,RouterLink,MatButtonModule,ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  orderService=inject(OrderService)
  order:any;
  matDialog=inject(MatDialog);
  currentSearch = new FormControl();
  searchValue = '';

ngOnInit() {
  this.currentSearch.valueChanges.subscribe((value)=>{
    this.searchValue= value==null|| value==""?" ":value;
    console.log("search")
    console.log(this.searchValue)
    this.orderService.getOrders(this.searchValue).subscribe((response)=>{
      this.order= response;
  
      });
  });
 this.currentSearch.setValue("");
  }

  openAddDialog() {
    const addDialogRef = this.matDialog.open(AddComponent, { });
        addDialogRef.afterClosed().subscribe(() => {
        this.currentSearch.setValue("");
        });
    }

}

