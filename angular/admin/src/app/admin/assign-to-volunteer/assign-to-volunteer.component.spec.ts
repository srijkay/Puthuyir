import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToVolunteerComponent } from './assign-to-volunteer.component';

describe('AssignToVolunteerComponent', () => {
  let component: AssignToVolunteerComponent;
  let fixture: ComponentFixture<AssignToVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignToVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignToVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
