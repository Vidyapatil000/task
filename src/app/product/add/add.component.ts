import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';
import { Lookup } from '../models/lookup';
import { Product } from '../models/product';
import { LookupService } from '../services/lookup.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productForm = this.fb.group({});
  ages!: Observable<Lookup[]>;
  mobiles!: Observable<Lookup[]>;
  
  formSubmitted = false;
  //mobiles: any | undefined;
  //ages: any | undefined;

  constructor(private fb:FormBuilder ,
    private lookupservice : LookupService ,
    private productService : ProductService ,
    private route : ActivatedRoute,
    private router : Router   ) { }

  ngOnInit(): void {
    this.productForm.addControl('id' , new FormControl(''));
    this.productForm.addControl('name' , new FormControl('',[Validators.required]));
    this.productForm.addControl('email' , new FormControl('',[Validators.required]));
    this.productForm.addControl('age' , new FormControl('',[Validators.required]));
    this.productForm.addControl('mobile' , new FormControl('',[Validators.required]));
    this.productForm.addControl('address' , new FormControl('',[Validators.required]));
    

    this.ages = this.lookupservice.getages();
    this.mobiles = this.lookupservice.getProductmobiles();

//const product$ =this.router.paramMap.pipe(
  //switchMap((params: ParamMap)=>
  //this.productService.getProductById(Number.parseInt(params.get('id')))));


   Product.subscribe((product: { id: any; name: any; email: any; age: any; mobile: any; address: any; })=>{
     if(!isNullOrUndefined(product)){
       console.log(product);
       this.productForm.get('id')?.setValue(product.id);
       this.productForm.get('name')?.setValue(product.name);
       this.productForm.get('email')?.setValue(product.email);
       this.productForm.get('age')?.setValue(product.age);
       this.productForm.get('mobile')?.setValue(product.mobile);
       this.productForm.get('address')?.setValue(product.address);
     }
   });
  }
save(_$event: any):void
{
  this.formSubmitted = true
  if(!this.productForm.valid)
  {
  return;
  }
  this.saveProduct();
  this.router.navigate(['/products']);
}


private saveProduct(){
  const product = new Product();
  product.id = this.productForm.get('id')?.value;
  product.name = this.productForm.get('name')?.value;
  product.email = this.productForm.get('email')?.value;
  product.mobile = this.productForm.get('mobile')?.value;
  product.age = this.productForm.get('age')?.value;
  product.address = this.productForm.get('address')?.value;

  if(product.id == 0)
  {
    this.productService.AddNewProduct(product);}
    else
    {
this.productService.updateProduct(product);
    }

  this.productService.AddNewProduct(product);
}

//getLookupObjFromCode(code:string):Lookup{
 // var lookup:Lookup ;
  //const subscription = this.ages._subscribe((lookup: any) =>{
    // lookup =lookup.find((item: { code: any; }) => item.code == code)
  //})
  //subscription.unsubscribe();
  //return lookup;
}
//}