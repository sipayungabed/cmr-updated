import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPerekrutanMerchantComponent } from './report-perekrutan-merchant.component';

describe('ReportPerekrutanMerchantComponent', () => {
  let component: ReportPerekrutanMerchantComponent;
  let fixture: ComponentFixture<ReportPerekrutanMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPerekrutanMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPerekrutanMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
