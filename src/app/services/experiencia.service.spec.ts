import { TestBed } from '@angular/core/testing';

import { ExperienciaService } from './experiencia.service';
import { HttpClientModule } from '@angular/common/http';

describe('ExperienciaService', () => {
  let service: ExperienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(ExperienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
