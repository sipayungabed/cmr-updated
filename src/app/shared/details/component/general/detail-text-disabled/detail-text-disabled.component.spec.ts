import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTextDisabledComponent } from './detail-text-disabled.component';

describe('DetailTextDisabledComponent', () => {
  let component: DetailTextDisabledComponent;
  let fixture: ComponentFixture<DetailTextDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTextDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTextDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
