import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notebooks6Component } from './notebooks6.component';

describe('Notebooks6Component', () => {
  let component: Notebooks6Component;
  let fixture: ComponentFixture<Notebooks6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notebooks6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notebooks6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
