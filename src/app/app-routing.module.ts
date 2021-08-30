import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
  redirectTo:'/products',
  pathMatch:'full'
},
{
  path:'products',
  loadChildren:'C:\angulartp\task\src\app\product'
 // ./product/product.modulesProductModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
