import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeussingCupComponent } from './geussing-cup.component';

describe('GeussingCupComponent', () => {
  let component: GeussingCupComponent;
  let fixture: ComponentFixture<GeussingCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeussingCupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeussingCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
