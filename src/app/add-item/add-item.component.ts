import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  itemForm = this.fb.group({
    name: [null, Validators.required],
    quantity: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required],
    seller: [null, Validators.required],
    location: [null, Validators.required],
    category: [null, Validators.required],
    currency: ['free', Validators.required]
  });

  hasUnitNumber = false;

  sellers = [
    {id: 1, name: 'Andy Mark'},
    {id: 2, name: 'Vex Pro'},
    {id: 3, name: 'Studica'},
    {id: 4, name: 'Home Hardware'},
    {id: 5, name: 'National Instruments'},
    {id: 6, name: 'Digikey'},
    {id: 7, name: 'Computers For Kids'},
  ];
  categories = [
    {id: 1, name: 'Computer'},
    {id: 2, name: 'Tool'},
    {id: 3, name: 'Motor'},
    {id: 4, name: 'Pneumatics'},
    {id: 5, name: 'Electrical'},
    {id: 6, name: 'Business'},
    {id: 7, name: 'Other'},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Item Added Succesfully');
  }
}
