import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectservesComponent } from './selectserves.component';

describe('SelectservesComponent', () => {
  let component: SelectservesComponent;
  let fixture: ComponentFixture<SelectservesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectservesComponent]
    });
    fixture = TestBed.createComponent(SelectservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
