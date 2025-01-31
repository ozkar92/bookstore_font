import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
http=inject(HttpClient);
baseURL=environment.baseUrl;
  constructor() { }
  
    getCustomers(){
       return this.http.get<response>(
         this.baseURL + 'Customer'
       );
     }
    addCustomer(name:string, lastName: string,dni:string,age:number){
      return this.http.post<response>(this.baseURL+'Customer',{
        name:name,
        lastName,
        dni:dni,
        age:age
      });
    }
    updateCustomer(id:number,name:string, lastName: string,dni:string,age:number){
      return this.http.put<response>(this.baseURL+'Customer/'+id,{
        name:name,
        lastName,
        dni:dni,
        age:age
      });
    }
    deleteCustomer(id:number){
      return this.http.delete<response>(this.baseURL+'Customer/'+id);
    }
}
