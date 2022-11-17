import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRadioChildrenDisabledComponent } from './detail-radio-children-disabled.component';

describe('DetailRadioChildrenDisabledComponent', () => {
  let component: DetailRadioChildrenDisabledComponent;
  let fixture: ComponentFixture<DetailRadioChildrenDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRadioChildrenDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRadioChildrenDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
