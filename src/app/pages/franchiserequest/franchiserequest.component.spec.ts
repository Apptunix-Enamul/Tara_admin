import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiserequestComponent } from './franchiserequest.component';

describe('FranchiserequestComponent', () => {
  let component: FranchiserequestComponent;
  let fixture: ComponentFixture<FranchiserequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiserequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
