import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouraselComponent } from './courasel.component';

describe('CouraselComponent', () => {
  let component: CouraselComponent;
  let fixture: ComponentFixture<CouraselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CouraselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouraselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
