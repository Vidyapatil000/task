import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit 
{

  products: Observable<IProduct[]> | undefined ;
  router: any;

  constructor(
    private productservice: ProductService
  ) { }

  ngOnInit(): void {
    this.products=this.productservice.getAllProducts();

  }
  


  deleteProduct(product: any):void
  {
    this.productservice.deleteProduct(product);
  }

  viewProduct(product: { id: string; }):void
  {
    this.router.navigate(['products/view/'+product.id]);
  }
}
