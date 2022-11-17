import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFasilitasCicilanNolTemplateComponent } from './details-fasilitas-cicilan-nol-template.component';

describe('DetailsFasilitasCicilanNolTemplateComponent', () => {
  let component: DetailsFasilitasCicilanNolTemplateComponent;
  let fixture: ComponentFixture<DetailsFasilitasCicilanNolTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFasilitasCicilanNolTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFasilitasCicilanNolTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
