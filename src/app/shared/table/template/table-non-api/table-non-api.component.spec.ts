import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNonApiComponent } from './table-non-api.component';

describe('TableNonApiComponent', () => {
  let component: TableNonApiComponent;
  let fixture: ComponentFixture<TableNonApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNonApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNonApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
