import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(private http:HttpClient) { }

private cartserviceurl=  'http://localhost:8082/addtocart';

// addToCart(book:any):Observable<any>
//   {
//     alert('add to cart successfully');

//     return this.http.post('http://localhost:8082/addtocart',book);
//   }

  addToCart(book: any): Observable<any> {
    return this.http.post<any>(this.cartserviceurl, book);
  }
 
}
