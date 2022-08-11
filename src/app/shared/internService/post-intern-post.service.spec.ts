import { TestBed } from '@angular/core/testing';

import { PostInternPostService } from './post-intern-post.service';

describe('PostInternPostService', () => {
  let service: PostInternPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostInternPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
