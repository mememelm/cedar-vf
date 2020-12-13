import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CunnicultureComponent } from './cunniculture.component';

describe('CunnicultureComponent', () => {
  let component: CunnicultureComponent;
  let fixture: ComponentFixture<CunnicultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CunnicultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CunnicultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
