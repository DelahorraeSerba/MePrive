import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServesDayComponent } from './select-serves-day.component';

describe('SelectServesDayComponent', () => {
  let component: SelectServesDayComponent;
  let fixture: ComponentFixture<SelectServesDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectServesDayComponent]
    });
    fixture = TestBed.createComponent(SelectServesDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
