import { Component } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  products = [
    { name: 'Dress', price: 49.99, description: 'A beautiful summer dress', quantity: 20, size: 'M', brand: 'Fashionista', image: 'assets/dress.jpg' },
    { name: 'Skirt', price: 29.99, description: 'A stylish skirt', quantity: 15, size: 'L', brand: 'Trendy', image: 'assets/skirt.jpg' }
  ];

  isAddProductVisible = false; // Toggle for showing Add Product form
  newProduct = { name: '', price: 0, description: '', quantity: 1, size: '', brand: '', image: '' };

  // Show the Add Product Form
  showAddProductForm() {
    this.isAddProductVisible = true;
  }

  // Cancel the Add Product Form
  cancelAddProduct() {
    this.isAddProductVisible = false;
    this.resetForm();
  }

  // Add a new product to the list
  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.quantity > 0 && this.newProduct.size && this.newProduct.brand) {
      this.products.push({ ...this.newProduct });
      this.resetForm();
      this.isAddProductVisible = false; // Close form after adding
    } else {
      alert('Please fill out all fields correctly!');
    }
  }

  // Handle image selection
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

  // Reset the form fields
  resetForm() {
    this.newProduct = { name: '', price: 0, description: '', quantity: 1, size: '', brand: '', image: '' };
  }

}
