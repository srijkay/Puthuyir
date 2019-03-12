import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchollregconfirmComponent } from './schollregconfirm.component';

describe('SchollregconfirmComponent', () => {
  let component: SchollregconfirmComponent;
  let fixture: ComponentFixture<SchollregconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchollregconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchollregconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
