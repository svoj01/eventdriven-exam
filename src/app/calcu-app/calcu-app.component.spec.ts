import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuAppComponent } from './calcu-app.component';

describe('CalcuAppComponent', () => {
  let component: CalcuAppComponent;
  let fixture: ComponentFixture<CalcuAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcuAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcuAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
