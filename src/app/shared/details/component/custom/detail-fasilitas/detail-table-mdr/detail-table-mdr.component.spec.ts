import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTableMdrComponent } from './detail-table-mdr.component';

describe('DetailTableMdrComponent', () => {
  let component: DetailTableMdrComponent;
  let fixture: ComponentFixture<DetailTableMdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTableMdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTableMdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
