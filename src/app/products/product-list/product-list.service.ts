import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface product {
  serial?: number,
  productName: string,
  price: number,
  numberOfItem: 1,
  description: string,
  category: string,
  imgSrc: string
}
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private _http: HttpClient) {


  }
  readJsonFile(url: string) {
    return this._http.get(url);
  }
}
