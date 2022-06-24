import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-cart', component: ProductCartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
