import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celular3Component } from './celular3.component';

describe('Celular3Component', () => {
  let component: Celular3Component;
  let fixture: ComponentFixture<Celular3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Celular3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celular3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
