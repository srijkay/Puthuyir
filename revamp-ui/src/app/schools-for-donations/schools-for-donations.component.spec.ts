import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsForDonationsComponent } from './schools-for-donations.component';

describe('SchoolsForDonationsComponent', () => {
  let component: SchoolsForDonationsComponent;
  let fixture: ComponentFixture<SchoolsForDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsForDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsForDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
