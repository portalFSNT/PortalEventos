import { TestBed } from '@angular/core/testing';

import { CadEventosService } from './cad-eventos.service';

describe('CadEventosService', () => {
  let service: CadEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
