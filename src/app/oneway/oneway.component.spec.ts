import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayComponent } from './oneway.component';

describe('OnewayComponent', () => {
  let component: OnewayComponent;
  let fixture: ComponentFixture<OnewayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewayComponent]
    });
    fixture = TestBed.createComponent(OnewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
