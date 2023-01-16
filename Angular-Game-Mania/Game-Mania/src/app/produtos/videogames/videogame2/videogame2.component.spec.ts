import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Videogame2Component } from './videogame2.component';

describe('Videogame2Component', () => {
  let component: Videogame2Component;
  let fixture: ComponentFixture<Videogame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Videogame2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Videogame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
