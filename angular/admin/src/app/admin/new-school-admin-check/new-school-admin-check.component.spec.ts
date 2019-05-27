import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchoolAdminCheckComponent } from './new-school-admin-check.component';

describe('NewSchoolAdminCheckComponent', () => {
  let component: NewSchoolAdminCheckComponent;
  let fixture: ComponentFixture<NewSchoolAdminCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSchoolAdminCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSchoolAdminCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
