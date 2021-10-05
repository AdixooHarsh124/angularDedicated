import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutStyleComponent } from './without-style.component';

describe('WithoutStyleComponent', () => {
  let component: WithoutStyleComponent;
  let fixture: ComponentFixture<WithoutStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
