import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsrequestComponent } from './shopsrequest.component';

describe('ShopsrequestComponent', () => {
  let component: ShopsrequestComponent;
  let fixture: ComponentFixture<ShopsrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
