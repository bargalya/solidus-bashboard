import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDataDisplayComponent } from './toggle-data-display.component';

describe('ToggleDataDisplayComponent', () => {
  let component: ToggleDataDisplayComponent;
  let fixture: ComponentFixture<ToggleDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleDataDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
