import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notebooks1Component } from './notebooks1.component';

describe('Notebooks1Component', () => {
  let component: Notebooks1Component;
  let fixture: ComponentFixture<Notebooks1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notebooks1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notebooks1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
