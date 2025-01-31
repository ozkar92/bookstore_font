import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { response } from '../models/response.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
baseURL=environment.baseUrl;
http=inject(HttpClient);
  constructor() { }
  addOrder(customerId:number,books:number[]){
    return this.http.post(this.baseURL+'Order',{
    customerId:customerId,
    books:books
    });
  }
  getOrders(dni:string){
    return this.http.get(this.baseURL+'Order/'+encodeURIComponent(dni));
  }
}
