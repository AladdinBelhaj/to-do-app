import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyWallComponent } from './sticky-wall.component';

describe('StickyWallComponent', () => {
  let component: StickyWallComponent;
  let fixture: ComponentFixture<StickyWallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyWallComponent]
    });
    fixture = TestBed.createComponent(StickyWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
