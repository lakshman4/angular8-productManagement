import { Component, OnInit } from '@angular/core';
import {QuestionService}from '../question.service';
import { Product } from '../model/product.model';
import {Router, RouterModule} from "@angular/router";




@Component({
  selector: 'app-jar',
  templateUrl: './jar.component.html',
  styleUrls: ['./jar.component.css']
})
export class JarComponent   {

   products:any=[];
  constructor(private http:QuestionService, private router:Router) { }

  ngOnInit() {
      this.http.getData().subscribe(data =>{
      this.products=data;
      console.log('onnnnn',this.products)

    })
}
deleteProduct(products: Product){
  this.http.deleteData(products._id)
    .subscribe( data => {
       this.products = this.products.filter(u => u !== products);
    })
    console.log("IDDDDDDDD",products._id)
};
editProduct(products:Product){
  window.localStorage.removeItem("editProductId");
    window.localStorage.setItem("editProductId", products._id.toString());
  this.router.navigate(['editProduct']);
}
 }
