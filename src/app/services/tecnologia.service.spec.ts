import { TestBed } from '@angular/core/testing';

import { TecnologiaService } from './tecnologia.service';
import { AppModule } from '../app.module';

describe('TecnologiaService', () => {
  let service: TecnologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    });
    service = TestBed.inject(TecnologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
