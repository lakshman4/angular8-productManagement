import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder, FormGroup, FormControl, Validator, Validators,AbstractControl, ValidationErrors } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../../services/company.service';
import { UserService } from '../../../sharedcomponents/services/user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CompanyComponent),
      multi: true
    },
    {
     provide: NG_VALIDATORS,
     useExisting: forwardRef(() => CompanyComponent),
     multi: true
   }
  ]
})
export class CompanyComponent implements OnInit, ControlValueAccessor {
  company: FormGroup;
  company_id: string;
  edit: Boolean = false;
  save: Boolean = false;
  sub;
  constructor(  private fb: FormBuilder, 
                private route: ActivatedRoute, 
                private router: Router,
                private companyService: CompanyService,
                private userService: UserService
              ) { }
  

  ngOnInit() {
    let companyDetails;
    this.company = this.fb.group({
      name: ['', [Validators.required]],
      address:  [''],
      owner:  [''],
      gst: ['', Validators.required]
    });

    this.sub = this.route.params.subscribe(params => {
      if(params['id']) {
        this.edit = true;
        const id = params['id'];
        this.company_id = id;
        let path = true;
        this.route.url.subscribe(
          (val) => {
            if(val[0].path == 'edit') {
              this.save = true
              path = false;
            }
          }, 
          (err) => console.log(err)
        );
        this.companyService
          .getCompanyDetails(id)
          .subscribe(
            (response) => {
                companyDetails = response;
                companyDetails.gst = companyDetails.gstId;
                this.userService
                  .getUserDetails(companyDetails.owner)
                  .subscribe(
                    (userDetails) => {
                      delete userDetails["company_id"];
                      delete userDetails["_id"];
                      companyDetails.owner = userDetails;
                      this.company.patchValue(companyDetails);
                      if(path) {
                        this.company.disable();
                      }
                      
                    },
                    (error) => {
                      companyDetails.owner = '';
                      this.company.patchValue(companyDetails);
                    }
                  );
                
            },
            (error) => console.log(error)
          )
      }
    });
   
  }

  public onSubmit(){
    this.companyService
      .saveCompanyDetails(this.company.value)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  public updateCompany() {
    console.log(this.company.value);
  }

  public enableFields() {
    this.router.navigate(['addcompany/edit',this.company_id]);
  } 
  
  public resetCompany() {
    this.router.navigate(['addcompany',this.company_id]);
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.company.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.company.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.company.disable() : this.company.enable();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
