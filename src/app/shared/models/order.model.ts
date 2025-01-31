import { Book } from "./book.model"
import { Customer } from "./customer.model"

export interface  Order{
    id:number,
    orderDate:string,
    customerId:number,
    customer:Customer,
    books:Book[],
    status:string,
    success:boolean,
    errorMessage:string
}