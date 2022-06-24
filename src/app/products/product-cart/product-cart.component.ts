import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { product } from '../product-list/product-list.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  productInCart: product[] = [];
  productInCartList: product[] = [];
  customerName: string = '';
  customerForm: any;

  constructor() { }

  ngOnInit(): void {
    this.createCustomerForm();
    if (localStorage.getItem('productList')) {
      this.productInCart = JSON.parse(localStorage.getItem('productList') || '{}');
      ///if i need to back to product list again and add another product ot card #Azmio
      this.productInCartList = this.productInCartList.concat.apply(this.productInCart);
      this.sumProductsPrice(0);
      console.log(this.productInCartList)
    }
  }
  createCustomerForm() {
    this.customerForm = new FormGroup({
      customerName: new FormControl(),
      address: new FormControl(),
      cardNumber: new FormControl()
    });
  }
  removeProductFromCart(product: product) {
    var index = this.productInCartList.indexOf(product);
    if (index > -1) {
      alert("Product With Name " + product.productName + " Will Be Removed From Cart ")
      this.productInCartList.splice(index, 1);
      let products: string = JSON.stringify(this.productInCartList);
      localStorage.setItem('productList', products)
    }

  }
  totalPrice: number = 0;

  sumProductsPrice(e: any) {
    this.totalPrice = 0
    for (var i in this.productInCartList) {
      this.totalPrice += this.productInCartList[i].price * this.productInCartList[i].numberOfItem;
    }
  }
  showCongratulation: number = 0;
  confirmOrder(data: any) {
    this.customerName = data.userName;
    if (!data.customerName || !data.address || !data.cardNumber) {
      alert("Complete Your Details")
    }
    else {
      this.showCongratulation = 1;
    }
  }
  editProductCart() {
    this.showCongratulation = 0;

  }
}
