import { Component, inject } from '@angular/core';
import { CustomerService } from '../../../shared/services/customer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../../../shared/models/customer.model';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

 custoerService = inject(CustomerService);
 matDialogRef = inject(MatDialogRef);
 data = inject(MAT_DIALOG_DATA) as {customer:Customer};

 deleteBook() {
  this.custoerService.deleteCustomer(this.data.customer.id).subscribe((response)=>{
    this.matDialogRef.close(response.data);
  });
}
}
