import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminuserloginComponent } from './adminuserlogin/adminuserlogin.component';
import { Home1Component } from './home1/home1.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'home',component:HomeComponent,
    children:[
      {path:'home1',component:Home1Component,
        children:[
          {path:'men',component:MenComponent},
          {path:'women',component:WomenComponent},
          {path:'kids',component:KidsComponent},
        ]
      },
    { path:'add-product',component:AddproductComponent } ,
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
