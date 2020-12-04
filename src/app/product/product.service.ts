import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProduct } from './product';
@Injectable({
    providedIn: 'root'
    //this means the service is available anywhere in the application
})

export class ProductService {

    private productUrl = 'api/products/products.json'; //reads data from our json file
    constructor(private http: HttpClient){

    }
    getProducts(): Observable <IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl);
    }
}