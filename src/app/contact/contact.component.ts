import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  // Fixed the typo here
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  // Injecting FormBuilder in the constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form group with validators
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]], // name is required
      email: ['', [Validators.required, Validators.email]], // email is required and should be a valid email
      phone: ['', [Validators.pattern('^\\+?[0-9]*$')]], // phone is optional, but must match the pattern if provided
      message: ['', [Validators.required]] // message is required
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      alert('Thank you for reaching out! We will get back to you soon.');
      this.contactForm.reset(); // Reset the form after submission
    } else {
     
      this.contactForm.markAllAsTouched();
    }
  }

  }
