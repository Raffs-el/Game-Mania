import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet2Component } from './tablet2.component';

describe('Tablet2Component', () => {
  let component: Tablet2Component;
  let fixture: ComponentFixture<Tablet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablet2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
