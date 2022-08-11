import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsAdvertComponent } from './jobs-advert.component';

describe('JobsAdvertComponent', () => {
  let component: JobsAdvertComponent;
  let fixture: ComponentFixture<JobsAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
