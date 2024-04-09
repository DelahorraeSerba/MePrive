import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelanguageComponent } from './changelanguage.component';

describe('ChangelanguageComponent', () => {
  let component: ChangelanguageComponent;
  let fixture: ComponentFixture<ChangelanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangelanguageComponent]
    });
    fixture = TestBed.createComponent(ChangelanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
