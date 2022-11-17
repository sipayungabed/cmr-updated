import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSlaComponent } from './report-sla.component';

describe('ReportSlaComponent', () => {
  let component: ReportSlaComponent;
  let fixture: ComponentFixture<ReportSlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
