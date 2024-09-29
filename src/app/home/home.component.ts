import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { BookService } from 'app/book.service';
import { CartService } from 'app/cartservice/cartservice.component';

CartService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  books: any[] = [];

  message='';
  book = {
    bookName: '',
    description: '',
    publisher: '',
    author: '',
    price: '',
    imageBase64:''
    
  };

  constructor(private bookService: BookService,private authservice:AuthService,private cartService:CartService) {}

  searchTerm = '';  // Used for filtering the books
  filteredBooks = [...this.books];  // Default filtered books

  onSearch() {
    if (this.searchTerm) {
      this.filteredBooks = this.books.filter(books =>
        books.bookName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        books.author.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredBooks = [...this.books];
    }
  }

  

  ngOnInit(): void {
    this.loadBooks(); // Automatically load books when the component is initialized
  }


  loadBooks(): void {
  this.authservice.getBooks().subscribe(
    (data) => {
      this.books = data;
    },
    (error) => {
      console.error('Error fetching books:', error);
    }
  );
}



addToCart(selectedBook: any) {
  // Dynamically assign the book data
  this.book.bookName = selectedBook.bookName;
  this.book.description = selectedBook.description;
  this.book.author = selectedBook.author;
  this.book.price = selectedBook.price;
  this.book.imageBase64 = selectedBook.imageBase64;
  console.log(this.book.bookName)
  console.log(this.book.price)
console.log(this.book.imageBase64)


  // Add the selected book to the cart
  console.log('Sending Book Data:', JSON.stringify(this.book));

  this.authservice.addToCart(this.book).subscribe(
    response => {
      // Handle success
      const message = 'Item added to cart successfully';
      alert(message);
      console.log(response);
    },
    error => {
      // Handle error
      console.error('Error adding item to cart:', error);
      alert('Failed to add item to cart.');
    }
  );
  

// this.http.post('your-backend-endpoint', book, {
//   headers: { 'Content-Type': 'application/json' }
// }).subscribe(
//   response => console.log('Success:', response),
//   error => console.error('Error:', error)
// );
  
   
   

 
}
}