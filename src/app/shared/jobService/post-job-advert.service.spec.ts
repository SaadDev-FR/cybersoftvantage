import { TestBed } from '@angular/core/testing';

import { PostJobAdvertService } from './post-job-advert.service';

describe('PostJobAdvertService', () => {
  let service: PostJobAdvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostJobAdvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
