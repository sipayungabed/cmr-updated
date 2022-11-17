import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSimpleTemplateComponent } from './details-simple-template.component';

describe('DetailsSimpleTemplateComponent', () => {
  let component: DetailsSimpleTemplateComponent;
  let fixture: ComponentFixture<DetailsSimpleTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSimpleTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSimpleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
