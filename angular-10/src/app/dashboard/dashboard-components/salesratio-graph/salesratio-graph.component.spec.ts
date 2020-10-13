import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesratioGraphComponent } from './salesratio-graph.component';

describe('SalesratioGraphComponent', () => {
  let component: SalesratioGraphComponent;
  let fixture: ComponentFixture<SalesratioGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesratioGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesratioGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
