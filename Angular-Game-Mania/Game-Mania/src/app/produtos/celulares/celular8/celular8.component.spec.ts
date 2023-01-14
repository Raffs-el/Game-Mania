import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celular8Component } from './celular8.component';

describe('Celular8Component', () => {
  let component: Celular8Component;
  let fixture: ComponentFixture<Celular8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Celular8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celular8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
