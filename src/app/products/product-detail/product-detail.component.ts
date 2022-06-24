import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product-list/product-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: product = <product>{}
  addedToCartProductList: product[] = [];
  productInCart: product[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkProductInCart();
    this.getProductParms();
  }
  checkProductInCart() {
    if (localStorage.getItem('productList')) {
      this.productInCart = JSON.parse(localStorage.getItem('productList') || '{}');
      console.log(this.productInCart)
    }
  }
  getProductParms() {
    this.route.params
      .subscribe(
        (params: any) => {
          this.productDetail = params;
        }
      );
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
      else {
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



