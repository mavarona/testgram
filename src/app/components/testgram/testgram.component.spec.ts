import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestgramComponent } from './testgram.component';

describe('TestgramComponent', () => {
  let component: TestgramComponent;
  let fixture: ComponentFixture<TestgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
