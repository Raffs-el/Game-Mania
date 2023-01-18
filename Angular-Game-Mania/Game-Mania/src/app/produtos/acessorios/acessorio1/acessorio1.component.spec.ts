import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessorio1Component } from './acessorio1.component';

describe('Acessorio1Component', () => {
  let component: Acessorio1Component;
  let fixture: ComponentFixture<Acessorio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acessorio1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessorio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
