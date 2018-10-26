import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRequestComponent } from './accept-request.component';

describe('AcceptRequestComponent', () => {
  let component: AcceptRequestComponent;
  let fixture: ComponentFixture<AcceptRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
