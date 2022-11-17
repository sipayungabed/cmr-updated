import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFasilitasFiturComponent } from './detail-fasilitas-fitur.component';

describe('DetailFasilitasFiturComponent', () => {
  let component: DetailFasilitasFiturComponent;
  let fixture: ComponentFixture<DetailFasilitasFiturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFasilitasFiturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFasilitasFiturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
