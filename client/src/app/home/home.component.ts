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
  readonly categories = ['all', 'ashampoo', 'eset'];

  @ViewChild(MatTabGroup)
  mdTabGroup: MatTabGroup;

  products: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      const category = params['category'];
      // Note that we use destructuring here
      if (category === 'all') {
        this.productService.getAll().subscribe(data => {
          this.products = data.products; // Assign array to use in HTML
        });
      } else {
        this.productService.getCategory(category).subscribe(data => {
          this.products = data.products;
        });
      }
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
