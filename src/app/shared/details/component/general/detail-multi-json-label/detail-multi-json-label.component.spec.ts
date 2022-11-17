import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMultiJsonLabelComponent } from './detail-multi-json-label.component';

describe('DetailMultiJsonLabelComponent', () => {
  let component: DetailMultiJsonLabelComponent;
  let fixture: ComponentFixture<DetailMultiJsonLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMultiJsonLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMultiJsonLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
