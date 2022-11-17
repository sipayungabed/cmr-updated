import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonInputComponent } from './non-input.component';

describe('NonInputComponent', () => {
  let component: NonInputComponent;
  let fixture: ComponentFixture<NonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
