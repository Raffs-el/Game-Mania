import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computador7Component } from './computador7.component';

describe('Computador7Component', () => {
  let component: Computador7Component;
  let fixture: ComponentFixture<Computador7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computador7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computador7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
