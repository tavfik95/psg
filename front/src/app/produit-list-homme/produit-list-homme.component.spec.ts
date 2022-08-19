import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitListHommeComponent } from './produit-list-homme.component';

describe('ProduitListHommeComponent', () => {
  let component: ProduitListHommeComponent;
  let fixture: ComponentFixture<ProduitListHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitListHommeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitListHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
