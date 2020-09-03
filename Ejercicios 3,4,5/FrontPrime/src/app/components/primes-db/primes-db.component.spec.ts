import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimesDBComponent } from './primes-db.component';

describe('PrimesDBComponent', () => {
  let component: PrimesDBComponent;
  let fixture: ComponentFixture<PrimesDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimesDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimesDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
