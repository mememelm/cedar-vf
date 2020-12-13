import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumaHistoriqueComponent } from './cuma-historique.component';

describe('CumaHistoriqueComponent', () => {
  let component: CumaHistoriqueComponent;
  let fixture: ComponentFixture<CumaHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumaHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CumaHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
