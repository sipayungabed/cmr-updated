import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableApiComponent } from "./TableApiComponent";

describe('TableApiComponent', () => {
  let component: TableApiComponent;
  let fixture: ComponentFixture<TableApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
