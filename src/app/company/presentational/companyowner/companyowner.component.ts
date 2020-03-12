import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder, FormGroup, FormControl, Validator, Validators,AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-companyowner',
  templateUrl: './companyowner.component.html',
  styleUrls: ['./companyowner.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CompanyownerComponent),
      multi: true
    }, 
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CompanyownerComponent),
      multi: true
    }
  ]
})
export class CompanyownerComponent implements OnInit, ControlValueAccessor  {
  ownerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.ownerForm =  this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      idtype: ['', Validators.required],
      idvalue: ['', Validators.required]
    });
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.ownerForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.ownerForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.ownerForm.disable() : this.ownerForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.ownerForm.valid ? null : { invalidForm: {valid: false, message: "basicInfoForm fields are invalid"}};
  }

}
