import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithouStyleAndComponentComponent } from './withou-style-and-component.component';

describe('WithouStyleAndComponentComponent', () => {
  let component: WithouStyleAndComponentComponent;
  let fixture: ComponentFixture<WithouStyleAndComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithouStyleAndComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithouStyleAndComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
