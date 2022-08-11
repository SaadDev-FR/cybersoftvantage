import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternAdvertComponent } from './intern-advert.component';

describe('InternAdvertComponent', () => {
  let component: InternAdvertComponent;
  let fixture: ComponentFixture<InternAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
