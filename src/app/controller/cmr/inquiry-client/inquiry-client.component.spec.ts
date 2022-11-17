import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryClientComponent } from './inquiry-client.component';

describe('InquiryClientComponent', () => {
  let component: InquiryClientComponent;
  let fixture: ComponentFixture<InquiryClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
