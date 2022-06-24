import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductDetailService } from '../product-detail/product-detail.service';
import { takeUntil } from 'rxjs/operators';
import { product } from './product-list.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private jsonUrl: string = '../../../assets/jsonFiles/productList_1.json';

  productList: product[] = [];
  addedToCartProductList: product[] = [];
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private _productDetailSer: ProductDetailService) { }

  ngOnInit(): void {
    this.checkProductInCart();
    this.getJsonDataFile();
  }
  productInCart: product[] = [];
  productInCartList: product[] = [];
  checkProductInCart() {
    if (localStorage.getItem('productList')) {
      this.productInCart = JSON.parse(localStorage.getItem('productList') || '{}');
      console.log(this.productInCart)
    }
  }
  getJsonDataFile() {
    this._productDetailSer.readJsonFile(this.jsonUrl)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        if (res) {
          this.productList = res.productCard
        }
      });

  }

  addToCart(product: any) {
    if (product) {
      ///if i need to back to product list again and add another product ot card #Azmio
      this.addedToCartProductList = this.productInCart;
      let prodesxist: boolean = this.productExists(product.serial);
      if (!prodesxist) {
        this.addedToCartProductList.push(product);
        alert("Product With Serial " + product.serial + " With Count " + product.numberOfItem + " Was Added To Cart");
      let products: string = JSON.stringify(this.addedToCartProductList);
      localStorage.setItem('productList', products);
      }
      else{
        alert("Product In Cart");

      }

      
    }


  }
  productExists(serial: number) {
    return this.addedToCartProductList.some(function (el) {
      return el.serial === serial;
    });
  }
}
