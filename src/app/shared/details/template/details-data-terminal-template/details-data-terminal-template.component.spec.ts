import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDataTerminalTemplateComponent } from './details-data-terminal-template.component';

describe('DetailsDataTerminalTemplateComponent', () => {
  let component: DetailsDataTerminalTemplateComponent;
  let fixture: ComponentFixture<DetailsDataTerminalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDataTerminalTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDataTerminalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
