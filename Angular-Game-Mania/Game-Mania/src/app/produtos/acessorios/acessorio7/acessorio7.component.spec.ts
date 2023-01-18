import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessorio7Component } from './acessorio7.component';

describe('Acessorio7Component', () => {
  let component: Acessorio7Component;
  let fixture: ComponentFixture<Acessorio7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acessorio7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessorio7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
