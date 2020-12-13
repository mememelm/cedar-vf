import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuviComponent } from './cuvi.component';

describe('CuviComponent', () => {
  let component: CuviComponent;
  let fixture: ComponentFixture<CuviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
