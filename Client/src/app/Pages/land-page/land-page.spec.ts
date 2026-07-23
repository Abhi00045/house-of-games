import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPage } from './land-page';

describe('LandPage', () => {
  let component: LandPage;
  let fixture: ComponentFixture<LandPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LandPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
