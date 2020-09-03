import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairsDBComponent } from './pairs-db.component';

describe('PairsDBComponent', () => {
  let component: PairsDBComponent;
  let fixture: ComponentFixture<PairsDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairsDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairsDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
