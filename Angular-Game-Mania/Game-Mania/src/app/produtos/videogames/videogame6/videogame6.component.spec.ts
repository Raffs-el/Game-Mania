import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videogame6Component } from './videogame6.component';

describe('Videogame6Component', () => {
  let component: Videogame6Component;
  let fixture: ComponentFixture<Videogame6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videogame6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videogame6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
