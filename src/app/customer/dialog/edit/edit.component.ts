import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CustomerService } from '../../../shared/services/customer.service';
import { Customer } from '../../../shared/models/customer.model';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatInputModule,FormsModule,MatFormFieldModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  customerService = inject(CustomerService);
  matDialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA) as {customer:Customer};

  updateBook() {
   this.customerService.updateCustomer(this.data.customer.id,this.data.customer.name,this.data.customer.lastName,this.data.customer.dni,this.data.customer.age).subscribe((response)=>{
    this.matDialogRef.close(response.data);
   });
    }
}
