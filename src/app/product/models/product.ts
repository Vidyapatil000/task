import { Lookup } from "./lookup";

export interface IProduct
{
id : number;
name : string;
email :string ;
mobile : Lookup ;
age : Lookup;
address : string ;
}
export class Product implements IProduct
 {
 static subscribe(arg0: (product: { id: any; name: any; email: any; age: any; mobile: any; address: any; }) => void) {
    throw new Error('Method not implemented.');
  }
    id!: number;
    name : string ;
    email :string;
    mobile : Lookup;
    age : Lookup;
    address : string;
    
  static id: any;

    constructor(name?:string,
       email?:string,
    mobile?: Lookup,
    age?: Lookup,
    address?: string)
    {
       this.name =  name as string;
        this.email = email as string;
       this.mobile = mobile as Lookup;
        this.age = age as Lookup;
        this.address = address as string;
   }
}
