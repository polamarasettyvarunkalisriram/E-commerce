import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminuserlogin',
  templateUrl: './adminuserlogin.component.html',
  styleUrl: './adminuserlogin.component.css'
})
export class AdminuserloginComponent {
    constructor(private router:Router){}
    username:string='';
    password:string='';
    loginasuserdash(){
      if(this.username==this.password){

      }
    }
    loginasadmindash(){
  
    }
}
