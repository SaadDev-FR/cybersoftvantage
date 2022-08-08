import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingServiceSectionComponent } from './landing-service-section.component';

describe('LandingServiceSectionComponent', () => {
  let component: LandingServiceSectionComponent;
  let fixture: ComponentFixture<LandingServiceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingServiceSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
