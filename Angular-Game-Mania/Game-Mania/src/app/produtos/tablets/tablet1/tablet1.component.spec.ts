import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet1Component } from './tablet1.component';

describe('Tablet1Component', () => {
  let component: Tablet1Component;
  let fixture: ComponentFixture<Tablet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
