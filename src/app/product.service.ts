import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private https:HttpClient) { }
  private apiurl=" http://localhost:4100/adddata";

  addproduct(producctdata:any){
    return this.https.post(this.apiurl,producctdata);
  }
}
