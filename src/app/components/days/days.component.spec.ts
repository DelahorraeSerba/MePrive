import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysComponent } from './days.component';

describe('DaysComponent', () => {
  let component: DaysComponent;
  let fixture: ComponentFixture<DaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaysComponent]
    });
    fixture = TestBed.createComponent(DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
