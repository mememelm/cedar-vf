import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCumaComponent } from './graph-cuma.component';

describe('GraphCumaComponent', () => {
  let component: GraphCumaComponent;
  let fixture: ComponentFixture<GraphCumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
