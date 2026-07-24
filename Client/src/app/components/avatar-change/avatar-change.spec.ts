import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarChange } from './avatar-change';

describe('AvatarChange', () => {
  let component: AvatarChange;
  let fixture: ComponentFixture<AvatarChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarChange],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarChange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
