import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computador4Component } from './computador4.component';

describe('Computador4Component', () => {
  let component: Computador4Component;
  let fixture: ComponentFixture<Computador4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computador4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computador4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
