import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalEarningComponent } from './referal-earning.component';

describe('ReferalEarningComponent', () => {
  let component: ReferalEarningComponent;
  let fixture: ComponentFixture<ReferalEarningComponent>;

  beforeEach(async(() => {
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
