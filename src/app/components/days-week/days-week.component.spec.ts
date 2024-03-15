import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysWeekComponent } from './days-week.component';

describe('DaysWeekComponent', () => {
  let component: DaysWeekComponent;
  let fixture: ComponentFixture<DaysWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaysWeekComponent]
    });
    fixture = TestBed.createComponent(DaysWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
