import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';
import { Observable } from 'rxjs/Observable';
import { Product, ProductService } from '../shared/services';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {

  readonly categories = [
    'ολα',
    'ashampoo',
    'eset'
  ];

  @ViewChild(MatTabGroup) mdTabGroup: MatTabGroup;

  products: Observable<Product[]>;
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {

    this.products = this.route.params
      .switchMap(({ category }) => {   // Note that we use destructuring here
        return category === 'ολα' ?
          this.productService.getAll() :
          this.productService.getCategory(category);
      });
  }

  onTabChange(tabIndex: number) {
    const category = this.categories[tabIndex];
    this.router.navigate([category], { relativeTo: this.route.parent });
  }

  ngAfterViewInit() {
    const category = this.route.snapshot.params['category'];
    this.mdTabGroup.selectedIndex = this.categories.indexOf(category);
  }
}
