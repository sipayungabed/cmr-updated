import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFasilitasKreditComponent } from './detail-fasilitas-kredit.component';

describe('DetailFasilitasKreditComponent', () => {
  let component: DetailFasilitasKreditComponent;
  let fixture: ComponentFixture<DetailFasilitasKreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFasilitasKreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFasilitasKreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
