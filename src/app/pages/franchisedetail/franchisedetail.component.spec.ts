import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisedetailComponent } from './franchisedetail.component';

describe('FranchisedetailComponent', () => {
  let component: FranchisedetailComponent;
  let fixture: ComponentFixture<FranchisedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
