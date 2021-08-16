import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeditComponent } from './shopedit.component';

describe('ShopeditComponent', () => {
  let component: ShopeditComponent;
  let fixture: ComponentFixture<ShopeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
