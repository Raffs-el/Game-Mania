import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computador3Component } from './computador3.component';

describe('Computador3Component', () => {
  let component: Computador3Component;
  let fixture: ComponentFixture<Computador3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computador3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computador3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
