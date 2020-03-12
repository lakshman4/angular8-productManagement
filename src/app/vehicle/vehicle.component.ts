import { Component, OnInit,forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import { Vehicle } from './vehicle.service';
import {Product} from '../model/product.model';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  profileForm: FormGroup;
  product:Product;

  constructor(private fb: FormBuilder ,private router:Router, private question:QuestionService) { }

  ngOnInit() {
    this.profileForm= this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      model: ['', Validators.required],

     })
  }
  saveVehicle(){
      this.question.addData(this.profileForm.value)
      .subscribe(data=>{

      });
      this.router.navigate(['addjar']);
      console.log(this.profileForm.value,"herrree");
  };




}

