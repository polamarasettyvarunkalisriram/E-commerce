import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  
})
export class RegisterComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  gender: string = '';
  phoneNumber: string = '';

  constructor(private router: Router) {}

  registeruser() {
    const existingUser = JSON.parse(localStorage.getItem('userdata') || 'null'); 
    if (existingUser) {
      alert('User already exists! Please login.');
      return;
    }
    const userdata = {
      email: this.email,
      username: this.username,
      password: this.password,
      gender: this.gender,
      phoneNumber: this.phoneNumber
    };

    localStorage.setItem('userdata', JSON.stringify(userdata));
    alert('Registration successful!');
    this.router.navigateByUrl('/login')
  }
}
