import { Component, OnInit,forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder, FormGroup, FormControl, Validator, Validators,AbstractControl, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'app-companyaddress',
  templateUrl: './companyaddress.component.html',
  styleUrls: ['./companyaddress.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CompanyaddressComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CompanyaddressComponent),
      multi: true
    }
  ]
})
export class CompanyaddressComponent implements OnInit, ControlValueAccessor  {
  addressForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.fb.group({
      line1: ['', Validators.required],
      line2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.addressForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.addressForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.addressForm.valid ? null : { invalidForm: {valid: false, message: "basicInfoForm fields are invalid"}};
  }

}
