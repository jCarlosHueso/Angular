import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisdakarComponent } from './parisdakar.component';

describe('ParisdakarComponent', () => {
  let component: ParisdakarComponent;
  let fixture: ComponentFixture<ParisdakarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisdakarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisdakarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
