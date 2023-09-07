import { TestBed } from '@angular/core/testing';

import { TranslateEspanolService } from './translate-espanol.service';

describe('TranslateEspanolService', () => {
  let service: TranslateEspanolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateEspanolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
