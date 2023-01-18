import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessorio8Component } from './acessorio8.component';

describe('Acessorio8Component', () => {
  let component: Acessorio8Component;
  let fixture: ComponentFixture<Acessorio8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acessorio8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessorio8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
