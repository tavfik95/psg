import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmaresComponent } from './palmares.component';

describe('PalmaresComponent', () => {
  let component: PalmaresComponent;
  let fixture: ComponentFixture<PalmaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
