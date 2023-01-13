import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet9Component } from './tablet9.component';

describe('Tablet9Component', () => {
  let component: Tablet9Component;
  let fixture: ComponentFixture<Tablet9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablet9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
