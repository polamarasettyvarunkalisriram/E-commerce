import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  constructor(private router:Router){}
  newProduct = { name: '', price: 0, description: '' };

  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0) {

      console.log('Product added:', this.newProduct);
      this.router.navigateByUrl('/home/home1')
      alert('Product added successfully!');
    } else {
      alert('Please fill out all fields correctly!');
    }
  }

  // Cancel and navigate back to the Men Component
  cancelAddProduct() {
    window.history.back(); // Navigates to the previous page
  }
}
