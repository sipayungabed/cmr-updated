import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDokumenTemplateComponent } from './details-dokumen-template.component';

describe('DetailsDokumenTemplateComponent', () => {
  let component: DetailsDokumenTemplateComponent;
  let fixture: ComponentFixture<DetailsDokumenTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDokumenTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDokumenTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
