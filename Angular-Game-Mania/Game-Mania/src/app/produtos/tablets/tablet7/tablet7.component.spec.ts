import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet7Component } from './tablet7.component';

describe('Tablet7Component', () => {
  let component: Tablet7Component;
  let fixture: ComponentFixture<Tablet7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablet7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
