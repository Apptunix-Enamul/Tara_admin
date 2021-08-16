import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeecheditComponent } from './speechedit.component';

describe('SpeecheditComponent', () => {
  let component: SpeecheditComponent;
  let fixture: ComponentFixture<SpeecheditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeecheditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeecheditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
