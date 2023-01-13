import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet4Component } from './tablet4.component';

describe('Tablet4Component', () => {
  let component: Tablet4Component;
  let fixture: ComponentFixture<Tablet4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablet4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
