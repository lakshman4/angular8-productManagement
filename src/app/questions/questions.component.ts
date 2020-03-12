import { Component, OnInit,forwardRef  } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from "@angular/forms";
import {QuestionService} from '../question.service';
import { ReactiveFormsModule } from '@angular/forms';
import{Product}from '../model/product.model';
import {Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  productForm: FormGroup;

  product:Product;

  constructor(private fb: FormBuilder ,private http:QuestionService, private router:Router) { }
  ngOnInit() {
    let productId = window.localStorage.getItem("editProductId");
    this.productForm= this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      model: ['', Validators.required],
      _id:['',Validators.required]
     })
     this.http.getSingleProduct(productId)
     .subscribe(data =>{
       this.productForm.setValue(data);
       console.log("dataaaaaaaaa",data);
     });

  }
  editValue(product:Product){
    let productId = window.localStorage.getItem("editProductId");
    this.http.editData(this.productForm.value,productId)
    .subscribe(data=>{

        console.log("addeddddd");
    })
    this.router.navigate(['addjar']);
  }
}
