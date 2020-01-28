import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDetailsComponent } from './reactive-details.component';

describe('ReactiveDetailsComponent', () => {
  let component: ReactiveDetailsComponent;
  let fixture: ComponentFixture<ReactiveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
