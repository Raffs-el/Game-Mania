import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notebooks5Component } from './notebooks5.component';

describe('Notebooks5Component', () => {
  let component: Notebooks5Component;
  let fixture: ComponentFixture<Notebooks5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notebooks5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notebooks5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
