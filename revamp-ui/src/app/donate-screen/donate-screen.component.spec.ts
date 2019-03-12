import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateScreenComponent } from './donate-screen.component';

describe('DonateScreenComponent', () => {
  let component: DonateScreenComponent;
  let fixture: ComponentFixture<DonateScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
