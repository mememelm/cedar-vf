import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumaComponent } from './cuma.component';

describe('CumaComponent', () => {
  let component: CumaComponent;
  let fixture: ComponentFixture<CumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
