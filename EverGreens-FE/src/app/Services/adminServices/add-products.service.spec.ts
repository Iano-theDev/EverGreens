import { TestBed } from '@angular/core/testing';

import { AddProductsService } from './add-products.service';

describe('AddProductsService', () => {
  let service: AddProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
