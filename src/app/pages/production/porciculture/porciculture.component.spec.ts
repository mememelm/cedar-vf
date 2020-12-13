import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcicultureComponent } from './porciculture.component';

describe('PorcicultureComponent', () => {
  let component: PorcicultureComponent;
  let fixture: ComponentFixture<PorcicultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcicultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcicultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
