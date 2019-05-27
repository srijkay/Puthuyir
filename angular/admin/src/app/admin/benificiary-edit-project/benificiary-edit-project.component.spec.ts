import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenificiaryEditProjectComponent } from './benificiary-edit-project.component';

describe('BenificiaryEditProjectComponent', () => {
  let component: BenificiaryEditProjectComponent;
  let fixture: ComponentFixture<BenificiaryEditProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenificiaryEditProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenificiaryEditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
