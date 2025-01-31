import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseURL=environment.baseUrl;
  private http=inject(HttpClient)
  constructor() { }

  getBooks(){
     return this.http.get<response>(
       this.baseURL + 'Book'
     );
   }
  addBook(title:string, author: string,isbn:string){
    return this.http.post<response>(this.baseURL+'Book',{
      title:title,
      author:author,
      isbn:isbn
    });
  }
  updateBook(id:number,title:string, author: string,isbn:string){
    return this.http.put<response>(this.baseURL+'Book/'+id,{
      title:title,
      author:author,
      isbn:isbn
    });
  }
  deleteBook(id:number){
    return this.http.delete<response>(this.baseURL+'Book/'+id);
  }
}
