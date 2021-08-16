import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittimeslotComponent } from './edittimeslot.component';

describe('EdittimeslotComponent', () => {
  let component: EdittimeslotComponent;
  let fixture: ComponentFixture<EdittimeslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittimeslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
