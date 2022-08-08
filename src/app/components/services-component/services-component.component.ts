import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-services-component',
  templateUrl: './services-component.component.html',
  styleUrls: ['./services-component.component.css'],
})
export class ServicesComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
