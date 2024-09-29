import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

Router
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    email: '',
    mobile:''
  };

  constructor(private authService: AuthService,private router:Router) {}

  register() {
    this.router.navigate(['/login']); 

    this.authService.register(this.user).subscribe(response => {
      console.log('User registered', response);
    });
  }
}

