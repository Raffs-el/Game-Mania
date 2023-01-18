import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessorio3Component } from './acessorio3.component';

describe('Acessorio3Component', () => {
  let component: Acessorio3Component;
  let fixture: ComponentFixture<Acessorio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acessorio3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessorio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
