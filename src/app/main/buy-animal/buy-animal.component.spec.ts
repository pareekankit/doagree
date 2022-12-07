import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAnimalComponent } from './buy-animal.component';

describe('BuyAnimalComponent', () => {
  let component: BuyAnimalComponent;
  let fixture: ComponentFixture<BuyAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
