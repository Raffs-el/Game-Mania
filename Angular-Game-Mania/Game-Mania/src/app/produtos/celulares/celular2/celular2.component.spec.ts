import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celular2Component } from './celular2.component';

describe('Celular2Component', () => {
  let component: Celular2Component;
  let fixture: ComponentFixture<Celular2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Celular2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celular2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
