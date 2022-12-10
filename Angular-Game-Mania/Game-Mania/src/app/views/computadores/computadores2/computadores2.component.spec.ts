import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computadores2Component } from './computadores2.component';

describe('Computadores2Component', () => {
  let component: Computadores2Component;
  let fixture: ComponentFixture<Computadores2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computadores2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computadores2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
