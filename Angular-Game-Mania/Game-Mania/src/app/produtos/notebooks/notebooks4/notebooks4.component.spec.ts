import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notebooks4Component } from './notebooks4.component';

describe('Notebooks4Component', () => {
  let component: Notebooks4Component;
  let fixture: ComponentFixture<Notebooks4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notebooks4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notebooks4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
