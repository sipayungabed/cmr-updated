import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTextAreaDisabledComponent } from './detail-text-area-disabled.component';

describe('DetailTextAreaDisabledComponent', () => {
  let component: DetailTextAreaDisabledComponent;
  let fixture: ComponentFixture<DetailTextAreaDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTextAreaDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTextAreaDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
