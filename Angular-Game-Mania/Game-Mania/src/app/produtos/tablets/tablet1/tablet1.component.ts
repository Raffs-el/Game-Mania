import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablet1',
  templateUrl: './tablet1.component.html',
  styleUrls: ['./tablet1.component.css']
})
export class Tablet1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  panelOpenState = false;
}
