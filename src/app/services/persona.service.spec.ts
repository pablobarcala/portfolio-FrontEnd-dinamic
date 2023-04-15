import { TestBed } from '@angular/core/testing';

import { PersonaService } from './persona.service';
import { HttpClientModule } from '@angular/common/http';

describe('PersonaService', () => {
  let service: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(PersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
