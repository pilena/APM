import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService] - *we don't need to add this now bc we registered it in the whole app
  //registering a service in a component so we can use it (it is also available to its child components)
})
export class ProductListComponent implements OnInit {
  pageTitle: string = " Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string; //this is a backing field 
  errorMessage: string;

  // *getter defines a read-only proprety 
  // *defining a getter and setter with the same name gives us a proprety we can read and write to
  // getter can't have parameters, it must have a return type and it is accesed as a proprety 
  get listFilter(): string {
    return this._listFilter;
  }

  // * setter defines a write-only proprety
  //with setter we execute code every time a proprety is modified, it does *not* have a return type
  // it has one parameter, value
  //backign field is a proprety that holds a setter value
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    //basic js code, no need for explanation
  }


  filteredProducts: IProduct[];
  // we don't filter our products aray below because we will loose the data

  // we use any[] as type when we don't know or don't care about the type, which defeats 
  // the purpose of strong typing 
  // we made IProducts as a interface so we could define type for each object, it also helps us with debugging 
  products: IProduct[] = [];
  // json with products was here, but we don't need it anymore bc of the service


  //function that is executed when the component is first initialised 
  //here we write the default values
  constructor(private productService: ProductService) {
    //this.filteredProducts = this.products; //we want to display all products initialy  

    //constructor is executed before ngOnInit 
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    //converting to lowercase so we can compare, caseinsensitive comparison
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  // we don't have return type - void 
  toggleImage(): void {
    this.showImage = !this.showImage;
    //showImage is proprety we defined (look up), it's false to begin with so pictures are not displayed
    // don't hardcode bc of toggle (true->false, false->true)

    //  * when ngIF is false, picture will be removed from DOM!
  }

  ngOnInit(): void {
    console.log("In onInit");
    this.productService.getProducts().subscribe({
      next: products => { 
        this.products = products;
        this.filteredProducts = this.products;
       },
      error: err => this.errorMessage = err
    });
    
  }
}
