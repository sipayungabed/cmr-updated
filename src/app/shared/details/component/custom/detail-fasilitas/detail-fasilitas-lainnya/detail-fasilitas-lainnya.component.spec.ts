import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFasilitasLainnyaComponent } from './detail-fasilitas-lainnya.component';

describe('DetailFasilitasLainnyaComponent', () => {
  let component: DetailFasilitasLainnyaComponent;
  let fixture: ComponentFixture<DetailFasilitasLainnyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFasilitasLainnyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFasilitasLainnyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
