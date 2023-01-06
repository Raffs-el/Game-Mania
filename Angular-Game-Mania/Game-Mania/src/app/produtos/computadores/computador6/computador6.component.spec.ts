import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computador6Component } from './computador6.component';

describe('Computador6Component', () => {
  let component: Computador6Component;
  let fixture: ComponentFixture<Computador6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computador6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computador6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
