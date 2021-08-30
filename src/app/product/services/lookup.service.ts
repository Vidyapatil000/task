import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Lookup } from '../models/lookup';

@Injectable({
  providedIn: 'root'
})
export class LookupService 
{
  getProductmobiles(): any {
    throw new Error('Method not implemented.');
  }
  getages(): any {
    throw new Error('Method not implemented.');
  }
  private ages : Array <Lookup> = [
   // {name: 'pcs',code:"1", category:1},
    //{name: 'gdhhdh',code:"2", category:1},
    //{name: 'hdhhd',code:"3", category:1},
    //{name: 'hhdhhd',code:"4", category:1}
  ];

  private productmobiles : Array <Lookup> = [
   // {name: 'uye',code:"1", category:1},
    //{name: 'iuyt',code:"2", category:1},
    //{name: 'hdhhd',code:"3", category:1},
    //{name: 'hhdhhd',code:"4", category:1}
  ];

  constructor()
   {
   }
   getProductCategories(): Observable<Lookup[]>
   {
     return of(this.productmobiles);
   }
   getUnits(): Observable<Lookup[]>
   {
    return of(this.ages);
   }
}
