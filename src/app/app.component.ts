import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  template: `
      <h1>Shopping Cart</h1>
    <select>
      [ngModel] = "quantity()"
      (ngModelChange) = "onQuantitySelected($event)">
      <option diabled value=""> --Select a quatity-- </option>
      <option *ngFor="let q of qtyAvailable()">{{q}}</option>
    </select>

    <div>{{quantity()}}</div>
    <div>product: {{selectedProduct().name}}</div>
    <div>price: {{selectedProduct().price}}</div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';

  quantity = signal(1); //requires initial value
  qtyAvailable = signal([1,2,3,4,5,6]);

  selectedProduct = signal<Product>({
    id:5,
    name: 'Hammer',
    price: 12
  });

  constructor() {
    console.log(`In constructor: ${this.quantity()}`) // requires ()
  }

  onQuantitySelected(qty: number) {

  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
}
