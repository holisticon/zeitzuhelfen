import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { INeedHelpComponent } from './i-need-help.component';

describe('INeedHelpComponent', () => {
  let component: INeedHelpComponent;
  let fixture: ComponentFixture<INeedHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INeedHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INeedHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
