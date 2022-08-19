import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitListEnfantComponent } from './produit-list-enfant.component';

describe('ProduitListEnfantComponent', () => {
  let component: ProduitListEnfantComponent;
  let fixture: ComponentFixture<ProduitListEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitListEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitListEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
