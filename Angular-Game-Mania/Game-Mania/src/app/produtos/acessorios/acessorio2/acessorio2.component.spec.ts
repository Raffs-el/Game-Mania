import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessorio2Component } from './acessorio2.component';

describe('Acessorio2Component', () => {
  let component: Acessorio2Component;
  let fixture: ComponentFixture<Acessorio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acessorio2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessorio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
