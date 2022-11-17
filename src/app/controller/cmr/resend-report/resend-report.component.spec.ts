import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendReportComponent } from './resend-report.component';

describe('ResendReportComponent', () => {
  let component: ResendReportComponent;
  let fixture: ComponentFixture<ResendReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
