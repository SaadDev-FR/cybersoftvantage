import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-service-section',
  templateUrl: './landing-service-section.component.html',
  styleUrls: ['./landing-service-section.component.css'],
})
export class LandingServiceSectionComponent implements OnInit {
  First = 'assets/images/web-devel.png';
  FirstSlide: any = '../../../assets/images/slider1.jpg';
  constructor() {}

  ngOnInit(): void {}
}
