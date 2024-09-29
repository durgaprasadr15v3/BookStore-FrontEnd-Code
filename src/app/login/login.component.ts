import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' };
  message = '';

  constructor(private authService: AuthService, private router: Router) {}  // Inject AuthService and Router

  login() {
    if (this.user.email && this.user.password) {
      this.authService.login(this.user).subscribe( 
        response => {
          // Handle login success
          this.message = 'Login successful';
          alert(this.message);
          console.log(response);
          this.router.navigate(['/home']);  // Redirect to home page
        },
        error => {
          // Handle login error
          this.message = 'Invalid credentials';
          console.error(error);
          alert(this.message);
        }
      );
    } else {
      this.message = 'Please fill in the required fields';
      alert(this.message);
    }
  }
}



