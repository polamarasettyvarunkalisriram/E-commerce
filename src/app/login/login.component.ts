import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor(private router:Router){}
  loginusername:string='';
  loginpassword:string='';
 loginuser(){
  const getuserregister=JSON.parse(localStorage.getItem('userdata')||'null')
  if(!getuserregister){
    alert('No registered user found. Please register first.');
      return;
  }
  if(getuserregister.username==this.loginusername && getuserregister.password==this.loginpassword){
    alert("user login successfully")
    this.router.navigateByUrl('/home');
  }
  else{
    alert('invalid details')
  }
 }

 backtoregister(){
  this.router.navigateByUrl('')
 }
}
