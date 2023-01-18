import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessorio9Component } from './acessorio9.component';

describe('Acessorio9Component', () => {
  let component: Acessorio9Component;
  let fixture: ComponentFixture<Acessorio9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acessorio9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessorio9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
