import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notebooks7Component } from './notebooks7.component';

describe('Notebooks7Component', () => {
  let component: Notebooks7Component;
  let fixture: ComponentFixture<Notebooks7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notebooks7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notebooks7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
