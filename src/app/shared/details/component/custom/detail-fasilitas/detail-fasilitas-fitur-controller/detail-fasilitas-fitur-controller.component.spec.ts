import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFasilitasFiturControllerComponent } from './detail-fasilitas-fitur-controller.component';

describe('DetailFasilitasFiturControllerComponent', () => {
  let component: DetailFasilitasFiturControllerComponent;
  let fixture: ComponentFixture<DetailFasilitasFiturControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFasilitasFiturControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFasilitasFiturControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
