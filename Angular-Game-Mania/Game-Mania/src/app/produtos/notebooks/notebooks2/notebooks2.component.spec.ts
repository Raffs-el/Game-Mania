import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notebooks2Component } from './notebooks2.component';

describe('Notebooks2Component', () => {
  let component: Notebooks2Component;
  let fixture: ComponentFixture<Notebooks2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notebooks2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notebooks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
