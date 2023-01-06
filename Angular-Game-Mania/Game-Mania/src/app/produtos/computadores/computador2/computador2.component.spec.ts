import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computador2Component } from './computador2.component';

describe('Computador2Component', () => {
  let component: Computador2Component;
  let fixture: ComponentFixture<Computador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computador2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
