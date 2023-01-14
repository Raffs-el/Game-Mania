import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celular4Component } from './celular4.component';

describe('Celular4Component', () => {
  let component: Celular4Component;
  let fixture: ComponentFixture<Celular4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Celular4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celular4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
