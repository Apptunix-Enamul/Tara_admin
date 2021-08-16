import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofencelistComponent } from './geofencelist.component';

describe('GeofencelistComponent', () => {
  let component: GeofencelistComponent;
  let fixture: ComponentFixture<GeofencelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeofencelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofencelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
