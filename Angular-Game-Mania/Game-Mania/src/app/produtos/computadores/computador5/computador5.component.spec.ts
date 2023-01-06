import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computador5Component } from './computador5.component';

describe('Computador5Component', () => {
  let component: Computador5Component;
  let fixture: ComponentFixture<Computador5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Computador5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computador5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
