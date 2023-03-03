import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrcComponent } from './wrc.component';

describe('WrcComponent', () => {
  let component: WrcComponent;
  let fixture: ComponentFixture<WrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
