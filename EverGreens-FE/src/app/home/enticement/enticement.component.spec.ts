import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnticementComponent } from './enticement.component';

describe('EnticementComponent', () => {
  let component: EnticementComponent;
  let fixture: ComponentFixture<EnticementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnticementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnticementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
