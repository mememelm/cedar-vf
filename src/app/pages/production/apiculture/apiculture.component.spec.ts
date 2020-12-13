import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicultureComponent } from './apiculture.component';

describe('ApicultureComponent', () => {
  let component: ApicultureComponent;
  let fixture: ComponentFixture<ApicultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApicultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
