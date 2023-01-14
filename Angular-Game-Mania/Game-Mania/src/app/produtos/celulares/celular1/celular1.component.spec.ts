import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celular1Component } from './celular1.component';

describe('Celular1Component', () => {
  let component: Celular1Component;
  let fixture: ComponentFixture<Celular1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Celular1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celular1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
