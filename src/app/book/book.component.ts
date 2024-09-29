import { Component } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { BookService } from 'app/book.service';  // Your service to handle HTTP requests

@Component({
  selector: 'app-book',
  templateUrl:'./book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookFormComponent {
  book = {
    bookName: '',
    description: '',
    publisher: '',
    author: '',
    price: ''
  };
  selectedFile: File | null = null;

  constructor(private authservice:AuthService,private bookservice:BookService) {}

  // Called when a file is selected
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Called when the form is submitted
  addBook() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('bookName', this.book.bookName);
      formData.append('description', this.book.description);
      formData.append('publisher', this.book.publisher);
      formData.append('author', this.book.author);
      formData.append('price', this.book.price);
      formData.append('bookImage', this.selectedFile);  // Append the selected image file

      // Call the service method to send the data to the server
      this.bookservice.addBook(formData).subscribe(
        (response) => {
          console.log('Book added successfully', response);
          alert("Book added successfully")
        },
        (error) => {
          console.error('Error while adding book:', error);
        }
      );
    } else {
      console.error('Please select an image.');
    }
  }
}
