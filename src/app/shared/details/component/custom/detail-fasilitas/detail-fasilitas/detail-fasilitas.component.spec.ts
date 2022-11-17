import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFasilitasComponent } from './detail-fasilitas.component';

describe('DetailFasilitasComponent', () => {
  let component: DetailFasilitasComponent;
  let fixture: ComponentFixture<DetailFasilitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFasilitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFasilitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
