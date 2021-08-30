import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
  path:'C:\angulartp\task\src\app\product\list',
  component:ListComponent
},
{
  path:'C:\angulartp\task\src\app\product\add',
  component:AddComponent
},
{
  path:'edit/:id',
  component:AddComponent
},
{
path:'view/id',
component:ViewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
