import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailControllerComponent } from './detail-controller.component';

describe('DetailControllerComponent', () => {
  let component: DetailControllerComponent;
  let fixture: ComponentFixture<DetailControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
