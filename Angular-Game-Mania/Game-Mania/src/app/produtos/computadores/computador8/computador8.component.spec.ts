import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computador8Component } from './computador8.component';

describe('Computador8Component', () => {
  let component: Computador8Component;
  let fixture: ComponentFixture<Computador8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computador8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computador8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
