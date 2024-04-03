import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragservedaysComponent } from './dragservedays.component';

describe('DragservedaysComponent', () => {
  let component: DragservedaysComponent;
  let fixture: ComponentFixture<DragservedaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragservedaysComponent]
    });
    fixture = TestBed.createComponent(DragservedaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
