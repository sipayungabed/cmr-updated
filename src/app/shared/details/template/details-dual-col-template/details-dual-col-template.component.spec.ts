import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDualColTemplateComponent } from './details-dual-col-template.component';

describe('DetailsDualColTemplateComponent', () => {
  let component: DetailsDualColTemplateComponent;
  let fixture: ComponentFixture<DetailsDualColTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDualColTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDualColTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
