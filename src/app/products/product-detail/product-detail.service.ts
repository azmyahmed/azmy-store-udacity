import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ProductDetailService {

  constructor(private _http: HttpClient) {


  }
  readJsonFile(url: string) {
    return this._http.get(url);
  }
}
