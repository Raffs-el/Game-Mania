import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celular9Component } from './celular9.component';

describe('Celular9Component', () => {
  let component: Celular9Component;
  let fixture: ComponentFixture<Celular9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Celular9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celular9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
