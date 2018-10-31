import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchoolRegistrationComponent } from '../view-school-registration/view-school-registration.component';

describe('ViewSchoolRegistrationComponent', () => {
  let component: ViewSchoolRegistrationComponent;
  let fixture: ComponentFixture<ViewSchoolRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSchoolRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSchoolRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
