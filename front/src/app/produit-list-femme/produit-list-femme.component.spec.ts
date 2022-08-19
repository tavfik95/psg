import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitListFemmeComponent } from './produit-list-femme.component';

describe('ProduitListFemmeComponent', () => {
  let component: ProduitListFemmeComponent;
  let fixture: ComponentFixture<ProduitListFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitListFemmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitListFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
