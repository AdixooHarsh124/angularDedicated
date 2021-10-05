import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutHtmlComponent } from './without-html.component';

describe('WithoutHtmlComponent', () => {
  let component: WithoutHtmlComponent;
  let fixture: ComponentFixture<WithoutHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
