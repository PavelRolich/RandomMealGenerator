import { TestBed } from '@angular/core/testing';

import { LoadRecipesService } from './load-recipes.service';

describe('LoadRecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadRecipesService = TestBed.get(LoadRecipesService);
    expect(service).toBeTruthy();
  });
});
