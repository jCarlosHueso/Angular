import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuladriftComponent } from './formuladrift.component';

describe('FormuladriftComponent', () => {
  let component: FormuladriftComponent;
  let fixture: ComponentFixture<FormuladriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuladriftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuladriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
