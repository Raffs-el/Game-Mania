import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet8Component } from './tablet8.component';

describe('Tablet8Component', () => {
  let component: Tablet8Component;
  let fixture: ComponentFixture<Tablet8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablet8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
