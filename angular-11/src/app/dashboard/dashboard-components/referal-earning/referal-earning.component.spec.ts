import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReferalEarningComponent } from './referal-earning.component';

describe('ReferalEarningComponent', () => {
  let component: ReferalEarningComponent;
  let fixture: ComponentFixture<ReferalEarningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalEarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalEarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
