import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessorio6Component } from './acessorio6.component';

describe('Acessorio6Component', () => {
  let component: Acessorio6Component;
  let fixture: ComponentFixture<Acessorio6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acessorio6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessorio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
