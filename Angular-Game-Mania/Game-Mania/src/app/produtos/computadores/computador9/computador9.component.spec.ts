import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computador9Component } from './computador9.component';

describe('Computador9Component', () => {
  let component: Computador9Component;
  let fixture: ComponentFixture<Computador9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computador9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computador9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
