import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computador1Component } from './computador1.component';

describe('Computador1Component', () => {
  let component: Computador1Component;
  let fixture: ComponentFixture<Computador1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computador1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
