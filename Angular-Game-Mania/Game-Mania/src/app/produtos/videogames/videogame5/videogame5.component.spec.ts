import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videogame5Component } from './videogame5.component';

describe('Videogame5Component', () => {
  let component: Videogame5Component;
  let fixture: ComponentFixture<Videogame5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videogame5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videogame5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
