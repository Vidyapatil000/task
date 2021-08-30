import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  product$:Observable<IProduct> | undefined;

  constructor(
    private route:ActivatedRoute,
private router : Router,
    private productService:ProductService
  ) {

   }

  ngOnInit(): void
   {
     this.product$=this.route.paramMap.pipe(
       switchMap((params: ParamMap)=>
     this.productService.getProductById(Number.parseInt(params.get('id')))));

  }
    editProduct(product: any) : void
    {
this.product$?.subscribe(product=>
  {
    console.log('edit.clicked');
    this.router.navigate(['product/edit/'+product.id]);
  });
    }
}
