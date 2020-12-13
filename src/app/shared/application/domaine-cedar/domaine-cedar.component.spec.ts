import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineCedarComponent } from './domaine-cedar.component';

describe('DomaineCedarComponent', () => {
  let component: DomaineCedarComponent;
  let fixture: ComponentFixture<DomaineCedarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaineCedarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineCedarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
