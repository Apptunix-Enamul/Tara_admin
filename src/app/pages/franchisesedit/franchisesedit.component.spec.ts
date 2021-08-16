import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseseditComponent } from './franchisesedit.component';

describe('FranchiseseditComponent', () => {
  let component: FranchiseseditComponent;
  let fixture: ComponentFixture<FranchiseseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
