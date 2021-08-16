import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofenceaddComponent } from './geofenceadd.component';

describe('GeofenceaddComponent', () => {
  let component: GeofenceaddComponent;
  let fixture: ComponentFixture<GeofenceaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeofenceaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofenceaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
