import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDokumenComponent } from './detail-dokumen.component';

describe('DetailDokumenComponent', () => {
  let component: DetailDokumenComponent;
  let fixture: ComponentFixture<DetailDokumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDokumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
