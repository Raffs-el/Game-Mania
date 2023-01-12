import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notebooks8Component } from './notebooks8.component';

describe('Notebooks8Component', () => {
  let component: Notebooks8Component;
  let fixture: ComponentFixture<Notebooks8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notebooks8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notebooks8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
