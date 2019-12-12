import { TestBed } from '@angular/core/testing';

import { LoginPageService } from './login-page.service';

describe('LoginPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginPageService = TestBed.get(LoginPageService);
    expect(service).toBeTruthy();
  });
});
