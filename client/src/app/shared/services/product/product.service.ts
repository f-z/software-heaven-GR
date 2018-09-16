import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  // domain = ""; // Production
  domain = environment.domain;
  options;

  constructor(private http: Http, private httpClient: HttpClient) {
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Setting format to JSON
      })
    });
  }

  getAll(): Observable<any> {
    return this.http
      .get(this.domain + 'products/allProducts', this.options)
      .map(res => res.json());
  }

  getCategory(category: string): Observable<any> {
    return this.http
      .get(this.domain + 'products/productsByCategory/' + category, this.options)
      .map(res => res.json());
  }

  getProductById(productId: string): Observable<any> {
    return this.http
      .get(this.domain + 'products/singleProduct/' + productId, this.options)
      .map(res => res.json());
  }
}

export interface Product {
  description: string;
  featured: boolean;
  imageUrl: string;
  price: number;
  title: string;
  id: string;
}
