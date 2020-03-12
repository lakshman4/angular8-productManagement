import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyownerComponent } from './companyowner.component';

describe('CompanyownerComponent', () => {
  let component: CompanyownerComponent;
  let fixture: ComponentFixture<CompanyownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
