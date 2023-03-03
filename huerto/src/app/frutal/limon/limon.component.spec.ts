import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimonComponent } from './limon.component';

describe('LimonComponent', () => {
  let component: LimonComponent;
  let fixture: ComponentFixture<LimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
