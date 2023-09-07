import { TestBed } from '@angular/core/testing';

import { TranslateCatalaService } from './translate-catala.service';

describe('TranslateCatalaService', () => {
  let service: TranslateCatalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateCatalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
