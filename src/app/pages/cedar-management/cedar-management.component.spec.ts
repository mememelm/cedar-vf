import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedarManagementComponent } from './cedar-management.component';

describe('CedarManagementComponent', () => {
  let component: CedarManagementComponent;
  let fixture: ComponentFixture<CedarManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CedarManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CedarManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
