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
      .get(this.domain + 'listings/allListings', this.options)
      .map(res => res.json());
    // return this.http.get<Product[]>('/assets/all');
  }

  getCategory(category: string): Observable<any> {
    return this.http
      .get(this.domain + 'listings/allListings', this.options)
      .map(res => res.json());
    // return this.httpClient.get<Product[]>(`assets/${category}`);
  }

  getProductById(productId: string): Observable<any> {
    return this.http
    .get(this.domain + 'listings/singleListing/' + productId, this.options)
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
