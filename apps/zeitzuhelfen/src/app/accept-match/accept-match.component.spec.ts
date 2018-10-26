import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptMatchComponent } from './accept-match.component';

describe('AcceptMatchComponent', () => {
  let component: AcceptMatchComponent;
  let fixture: ComponentFixture<AcceptMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
