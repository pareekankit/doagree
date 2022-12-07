import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContentComponent } from './get-content.component';

describe('GetContentComponent', () => {
  let component: GetContentComponent;
  let fixture: ComponentFixture<GetContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
