import { Component } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  products = [
    { name: 'Shirt', price: 19.99, description: 'A nice shirt', quantity: 10, size: 'M', brand: 'Brand A', image: 'assets/shirt.jpg' },
    { name: 'Jeans', price: 39.99, description: 'A pair of jeans', quantity: 5, size: 'L', brand: 'Brand B', image: 'assets/jeans.jpg' }
  ];

  isAddProductVisible = false;
  newProduct = { name: '', price: 0, description: '', quantity: 1, size: '', brand: '', image: '' }; // Initialize image as an empty string

  showAddProductForm() {
    this.isAddProductVisible = true;
  }

  cancelAddProduct() {
    this.isAddProductVisible = false;
    this.resetForm();
  }

  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.quantity > 0 && this.newProduct.size && this.newProduct.brand) {

      this.products.push({ ...this.newProduct });
      this.resetForm();
      this.isAddProductVisible = false; 
    } else {
      alert('Please fill out all fields correctly!');
    }
  }

  // Handle the image upload
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newProduct.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Reset form fields
  resetForm() {
    this.newProduct = { name: '', price: 0, description: '', quantity: 1, size: '', brand: '', image: '' }; // Reset image to empty string
  }
}
