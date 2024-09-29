import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080';

  private bookstoreocatalogservice='http://localhost:8081/getallbooks';

   message='';
  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
   
    return this.http.post(`${this.baseUrl}/createnewresourec`, user);
  }
  login(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/login', user, { responseType: 'text' });
  }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.bookstoreocatalogservice);
  }


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


