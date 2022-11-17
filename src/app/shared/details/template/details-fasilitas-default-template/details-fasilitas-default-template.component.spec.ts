import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFasilitasDefaultTemplateComponent } from './details-fasilitas-default-template.component';

describe('DetailsFasilitasDefaultTemplateComponent', () => {
  let component: DetailsFasilitasDefaultTemplateComponent;
  let fixture: ComponentFixture<DetailsFasilitasDefaultTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFasilitasDefaultTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFasilitasDefaultTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
