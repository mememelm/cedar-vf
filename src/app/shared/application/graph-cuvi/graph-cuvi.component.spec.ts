import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCuviComponent } from './graph-cuvi.component';

describe('GraphCuviComponent', () => {
  let component: GraphCuviComponent;
  let fixture: ComponentFixture<GraphCuviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCuviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCuviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
