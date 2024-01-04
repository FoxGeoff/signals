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

      <div>selected qty: {{quantity()}}</div>
    <!-- REF: https://www.angularjswiki.com/angular/ngmodelchange-change-angular/ -->
    <select [ngModel]="quantity()"
       (ngModelChange) = "onQuantitySelected($event)">

      <option diabled value=""> --Select a quatity-- </option>
      <option *ngFor="let q of qtyAvailable()">{{q}}</option>
    </select>

    <br>
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
    console.log(`In constructor: ${this.quantity()}`); // requires ()
  }

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
    console.log(`In onQuantitySelected: ${this.quantity()}`); // requires ()

  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
}
