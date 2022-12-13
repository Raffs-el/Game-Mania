import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablets2Component } from './tablets2.component';

describe('Tablets2Component', () => {
  let component: Tablets2Component;
  let fixture: ComponentFixture<Tablets2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablets2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablets2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
