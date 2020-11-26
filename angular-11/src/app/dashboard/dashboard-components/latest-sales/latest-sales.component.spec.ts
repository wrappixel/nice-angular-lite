import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LatestSalesComponent } from './latest-sales.component';

describe('LatestSalesComponent', () => {
  let component: LatestSalesComponent;
  let fixture: ComponentFixture<LatestSalesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
