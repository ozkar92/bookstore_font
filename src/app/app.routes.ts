import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    {
        path: 'books',
        component: BookComponent,
      },
      {
        path: 'customers',
        component: CustomerComponent,
      },
      {
        path: 'orders',
        component: OrderComponent,
      },
];
