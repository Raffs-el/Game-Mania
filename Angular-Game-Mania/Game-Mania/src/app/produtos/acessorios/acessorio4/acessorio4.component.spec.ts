import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessorio4Component } from './acessorio4.component';

describe('Acessorio4Component', () => {
  let component: Acessorio4Component;
  let fixture: ComponentFixture<Acessorio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acessorio4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessorio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
