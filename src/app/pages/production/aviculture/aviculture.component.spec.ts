import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvicultureComponent } from './aviculture.component';

describe('AvicultureComponent', () => {
  let component: AvicultureComponent;
  let fixture: ComponentFixture<AvicultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvicultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvicultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
