import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAddressTwoComponent } from './detail-address-two.component';

describe('DetailAddressTwoComponent', () => {
  let component: DetailAddressTwoComponent;
  let fixture: ComponentFixture<DetailAddressTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAddressTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAddressTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
