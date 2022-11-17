import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFasilitasECommerceTemplateComponent } from './details-fasilitas-e-commerce-template.component';

describe('DetailsFasilitasECommerceTemplateComponent', () => {
  let component: DetailsFasilitasECommerceTemplateComponent;
  let fixture: ComponentFixture<DetailsFasilitasECommerceTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFasilitasECommerceTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFasilitasECommerceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
