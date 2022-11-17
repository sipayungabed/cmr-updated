import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFasilitasFlazzComponent } from './detail-fasilitas-flazz.component';

describe('DetailFasilitasFlazzComponent', () => {
  let component: DetailFasilitasFlazzComponent;
  let fixture: ComponentFixture<DetailFasilitasFlazzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFasilitasFlazzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFasilitasFlazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
