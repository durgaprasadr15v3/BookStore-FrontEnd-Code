import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  

  constructor(private http:HttpClient) { }

  addBook(bookData: FormData): Observable<any> {
    return this.http.post(`http://localhost:8081/addbook`, bookData);
  }

  


}
