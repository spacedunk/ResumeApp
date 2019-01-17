import { TestBed } from '@angular/core/testing';

import { UserResumeService } from './user-resume.service';

describe('UserResumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserResumeService = TestBed.get(UserResumeService);
    expect(service).toBeTruthy();
  });
});
