import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    NewProductComponent,
    ProductCartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ProductsModule { }
