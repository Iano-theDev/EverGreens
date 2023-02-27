import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePopularComponent } from './single-popular.component';

describe('SinglePopularComponent', () => {
  let component: SinglePopularComponent;
  let fixture: ComponentFixture<SinglePopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePopularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
