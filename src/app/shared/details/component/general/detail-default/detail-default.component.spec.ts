import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDefaultComponent } from './detail-default.component';

describe('DetailDefaultComponent', () => {
  let component: DetailDefaultComponent;
  let fixture: ComponentFixture<DetailDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
