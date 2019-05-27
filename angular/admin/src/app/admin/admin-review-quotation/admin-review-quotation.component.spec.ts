import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewQuotationComponent } from './admin-review-quotation.component';

describe('AdminReviewQuotationComponent', () => {
  let component: AdminReviewQuotationComponent;
  let fixture: ComponentFixture<AdminReviewQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReviewQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReviewQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
