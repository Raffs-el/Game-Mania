import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet3Component } from './tablet3.component';

describe('Tablet3Component', () => {
  let component: Tablet3Component;
  let fixture: ComponentFixture<Tablet3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablet3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
