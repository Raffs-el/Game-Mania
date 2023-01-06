import { Component, OnInit } from '@angular/core';

import * as $ from "jquery"; 


@Component({
  selector: 'app-computador1',
  templateUrl: './computador1.component.html',
  styleUrls: ['./computador1.component.css']
})
export class Computador1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState = false;
}