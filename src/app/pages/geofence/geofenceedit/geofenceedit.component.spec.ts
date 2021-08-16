import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofenceeditComponent } from './geofenceedit.component';

describe('GeofenceeditComponent', () => {
  let component: GeofenceeditComponent;
  let fixture: ComponentFixture<GeofenceeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeofenceeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofenceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
