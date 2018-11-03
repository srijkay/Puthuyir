import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShoolRegistrationComponent } from './view-shool-registration.component';

describe('ViewShoolRegistrationComponent', () => {
  let component: ViewShoolRegistrationComponent;
  let fixture: ComponentFixture<ViewShoolRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShoolRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShoolRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
