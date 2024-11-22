import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentarlibroComponent } from './rentarlibro.component';

describe('RentarlibroComponent', () => {
  let component: RentarlibroComponent;
  let fixture: ComponentFixture<RentarlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentarlibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentarlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
