import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechaddComponent } from './speechadd.component';

describe('SpeechaddComponent', () => {
  let component: SpeechaddComponent;
  let fixture: ComponentFixture<SpeechaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
