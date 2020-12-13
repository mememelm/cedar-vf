import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuviHistoriqueComponent } from './cuvi-historique.component';

describe('CuviHistoriqueComponent', () => {
  let component: CuviHistoriqueComponent;
  let fixture: ComponentFixture<CuviHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuviHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuviHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
