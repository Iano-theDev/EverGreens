import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPicksComponent } from './popular-picks.component';

describe('PopularPicksComponent', () => {
  let component: PopularPicksComponent;
  let fixture: ComponentFixture<PopularPicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularPicksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
