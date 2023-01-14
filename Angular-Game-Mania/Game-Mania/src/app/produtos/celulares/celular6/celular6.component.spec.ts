import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celular6Component } from './celular6.component';

describe('Celular6Component', () => {
  let component: Celular6Component;
  let fixture: ComponentFixture<Celular6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Celular6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celular6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
