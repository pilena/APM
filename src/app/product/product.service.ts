import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
@Injectable({
    providedIn: 'root'
    //this means the service is available anywhere in the application
})

export class ProductService {

    private productUrl = 'api/products/products.json'; //reads data from our json file
    constructor(private http: HttpClient){

    }
    getProducts(): Observable <IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(tap(data=> console.log('All: ' + JSON.stringify(data))), 
        catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = "";
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server has returned code ${err.status}, error message is:${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}