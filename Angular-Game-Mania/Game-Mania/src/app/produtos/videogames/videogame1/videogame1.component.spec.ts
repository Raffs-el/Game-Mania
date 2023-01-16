import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videogame1Component } from './videogame1.component';

describe('Videogame1Component', () => {
  let component: Videogame1Component;
  let fixture: ComponentFixture<Videogame1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videogame1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videogame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
