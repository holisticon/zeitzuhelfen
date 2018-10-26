import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IDonateTimeComponent } from './i-donate-time.component';

describe('IDonateTimeComponent', () => {
  let component: IDonateTimeComponent;
  let fixture: ComponentFixture<IDonateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IDonateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IDonateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
