import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrivermoduleComponent } from './drivermodule.component';

describe('DrivermoduleComponent', () => {
  let component: DrivermoduleComponent;
  let fixture: ComponentFixture<DrivermoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivermoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
