import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notebooks9Component } from './notebooks9.component';

describe('Notebooks9Component', () => {
  let component: Notebooks9Component;
  let fixture: ComponentFixture<Notebooks9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notebooks9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notebooks9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
