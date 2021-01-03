import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniBarComponent } from './omni-bar.component';

describe('OmniBarComponent', () => {
  let component: OmniBarComponent;
  let fixture: ComponentFixture<OmniBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmniBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
