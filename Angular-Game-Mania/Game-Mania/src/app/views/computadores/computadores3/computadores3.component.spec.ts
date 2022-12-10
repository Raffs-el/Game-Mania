import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computadores3Component } from './computadores3.component';

describe('Computadores3Component', () => {
  let component: Computadores3Component;
  let fixture: ComponentFixture<Computadores3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computadores3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computadores3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
