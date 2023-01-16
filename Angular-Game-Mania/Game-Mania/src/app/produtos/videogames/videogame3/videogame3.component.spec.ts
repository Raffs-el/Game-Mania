import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videogame3Component } from './videogame3.component';

describe('Videogame3Component', () => {
  let component: Videogame3Component;
  let fixture: ComponentFixture<Videogame3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videogame3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videogame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
