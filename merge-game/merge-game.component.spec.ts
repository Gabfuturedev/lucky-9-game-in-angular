import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeGameComponent } from './merge-game.component';

describe('MergeGameComponent', () => {
  let component: MergeGameComponent;
  let fixture: ComponentFixture<MergeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
