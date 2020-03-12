import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../app/model/product.model';
const localUrl='http://localhost:4000/posts';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(localUrl+`/productList`);
  }
  addData(product:Product){
    return this.http.post(localUrl+`/productAdd`,product);
  }
  deleteData(id){
    return this.http.delete(`${localUrl}/${"delete"}/${id}`);
  }
  editData(product:Product, id){
    return this.http.put(`${localUrl}/${"edit"}/${id}`,product);
  }
  getSingleProduct(id){
    return this.http.get(`${localUrl}/${"single"}/${id}`);

  }
}
