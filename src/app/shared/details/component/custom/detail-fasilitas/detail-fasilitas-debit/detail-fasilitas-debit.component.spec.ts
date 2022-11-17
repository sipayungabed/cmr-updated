import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFasilitasDebitComponent } from './detail-fasilitas-debit.component';

describe('DetailFasilitasDebitComponent', () => {
  let component: DetailFasilitasDebitComponent;
  let fixture: ComponentFixture<DetailFasilitasDebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFasilitasDebitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFasilitasDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
