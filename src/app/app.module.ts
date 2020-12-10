import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent} from './home/welcome.component';
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
    ProductDetailComponent,
    WelcomeComponent
   // ProductService
  ],
  imports: [
    // *here we import ones already written for us 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot([
      { path: 'product', component: ProductListComponent},
      { path: 'product/:id', component: ProductListComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
