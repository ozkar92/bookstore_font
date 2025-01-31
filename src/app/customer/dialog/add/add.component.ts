import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CustomerService } from '../../../shared/services/customer.service';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

 customerService = inject(CustomerService);
  matDialogRef = inject(MatDialogRef);
  addCustomer(name: string,lastname: string,dni: string,age:number) {
    this.customerService.addCustomer(name,lastname,dni,age).subscribe((response)=>{

      this.matDialogRef.close(response.data)
    });
    }
}
