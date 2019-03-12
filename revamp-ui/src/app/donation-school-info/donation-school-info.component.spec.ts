import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationSchoolInfoComponent } from './donation-school-info.component';

describe('DonationSchoolInfoComponent', () => {
  let component: DonationSchoolInfoComponent;
  let fixture: ComponentFixture<DonationSchoolInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationSchoolInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationSchoolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
