import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessReviewsComponent } from './access-reviews.component';

describe('AccessReviewsComponent', () => {
  let component: AccessReviewsComponent;
  let fixture: ComponentFixture<AccessReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
