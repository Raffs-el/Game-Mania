import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videogame4Component } from './videogame4.component';

describe('Videogame4Component', () => {
  let component: Videogame4Component;
  let fixture: ComponentFixture<Videogame4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videogame4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videogame4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
