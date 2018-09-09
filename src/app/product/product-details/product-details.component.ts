import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ShoppingCartService } from '../../shared/services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngs-product-details',
  styleUrls: [ './product-details.component.scss' ],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
  @Input() product: Product;
  quantity: number;

  constructor(private router: Router, private shoppingCartService: ShoppingCartService) {}

  addItems() {
    this.shoppingCartService.addItem(this.product.id, this.quantity);
    this.quantity = null; // Reset selected number of items.
    this.router.navigate(['cart']);
  }
}
