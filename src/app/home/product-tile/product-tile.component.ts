import { Component, Input } from '@angular/core';
import { Product } from '../../shared/services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngs-product-tile',
  styleUrls: [ './product-tile.component.scss' ],
  templateUrl: './product-tile.component.html'
})
export class ProductTileComponent {
  @Input() product: Product;
}
