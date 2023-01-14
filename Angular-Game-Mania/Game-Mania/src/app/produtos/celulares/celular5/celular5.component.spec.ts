import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celular5Component } from './celular5.component';

describe('Celular5Component', () => {
  let component: Celular5Component;
  let fixture: ComponentFixture<Celular5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Celular5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celular5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
