import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMultiValueComponent } from './detail-multi-value.component';

describe('DetailMultiValueComponent', () => {
  let component: DetailMultiValueComponent;
  let fixture: ComponentFixture<DetailMultiValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMultiValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMultiValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
