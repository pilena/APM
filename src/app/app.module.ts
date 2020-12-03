import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
//import {ProductService} from './product/product.service';

// don't forget to import all components and pipes to angular module
// since we don't have more modules, everything goes to app module
@NgModule({
  declarations: [
    // *here we write directives, components and pipes we wrote ourselves 
    AppComponent,
    ProductListComponent, 
    ConvertToSpacesPipe, 
    StarComponent,
   // ProductService
  ],
  imports: [
    // *here we import ones already written for us 
    BrowserModule, 
    FormsModule, 
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
