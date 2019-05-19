import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BasketComponent } from './basket/basket.component'
const routes: Routes = [
  {path: 'item-list', component: ItemListComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'basket', component: BasketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
