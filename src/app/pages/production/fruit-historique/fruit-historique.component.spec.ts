import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitHistoriqueComponent } from './fruit-historique.component';

describe('FruitHistoriqueComponent', () => {
  let component: FruitHistoriqueComponent;
  let fixture: ComponentFixture<FruitHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
