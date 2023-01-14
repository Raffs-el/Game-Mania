import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celular7Component } from './celular7.component';

describe('Celular7Component', () => {
  let component: Celular7Component;
  let fixture: ComponentFixture<Celular7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Celular7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celular7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
