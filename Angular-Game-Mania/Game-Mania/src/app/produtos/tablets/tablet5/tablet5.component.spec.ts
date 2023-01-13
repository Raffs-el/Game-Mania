import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablet5Component } from './tablet5.component';

describe('Tablet5Component', () => {
  let component: Tablet5Component;
  let fixture: ComponentFixture<Tablet5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablet5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
