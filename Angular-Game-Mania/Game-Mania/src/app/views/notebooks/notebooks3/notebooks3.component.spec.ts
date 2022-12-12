import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notebooks3Component } from './notebooks3.component';

describe('Notebooks3Component', () => {
  let component: Notebooks3Component;
  let fixture: ComponentFixture<Notebooks3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notebooks3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notebooks3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
