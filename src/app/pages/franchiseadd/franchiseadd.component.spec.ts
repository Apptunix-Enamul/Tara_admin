import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseaddComponent } from './franchiseadd.component';

describe('FranchiseaddComponent', () => {
  let component: FranchiseaddComponent;
  let fixture: ComponentFixture<FranchiseaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
