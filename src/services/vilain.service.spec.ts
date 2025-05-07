import { TestBed } from '@angular/core/testing';

import { VilainService } from './vilain.service';

describe('VilainService', () => {
  let service: VilainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VilainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
