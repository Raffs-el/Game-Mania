import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet6Component } from './tablet6.component';

describe('Tablet6Component', () => {
  let component: Tablet6Component;
  let fixture: ComponentFixture<Tablet6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablet6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
