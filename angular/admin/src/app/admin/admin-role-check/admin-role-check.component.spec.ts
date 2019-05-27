import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoleCheckComponent } from './admin-role-check.component';

describe('AdminRoleCheckComponent', () => {
  let component: AdminRoleCheckComponent;
  let fixture: ComponentFixture<AdminRoleCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRoleCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoleCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
