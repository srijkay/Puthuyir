import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InititeEmailToDeoComponent } from './initite-email-to-deo.component';

describe('InititeEmailToDeoComponent', () => {
  let component: InititeEmailToDeoComponent;
  let fixture: ComponentFixture<InititeEmailToDeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InititeEmailToDeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InititeEmailToDeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
