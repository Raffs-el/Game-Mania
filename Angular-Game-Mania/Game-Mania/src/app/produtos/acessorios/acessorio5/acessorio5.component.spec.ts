import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessorio5Component } from './acessorio5.component';

describe('Acessorio5Component', () => {
  let component: Acessorio5Component;
  let fixture: ComponentFixture<Acessorio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acessorio5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessorio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
