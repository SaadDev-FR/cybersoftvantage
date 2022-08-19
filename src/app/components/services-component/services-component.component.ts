import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-services-component',
  templateUrl: './services-component.component.html',
  styleUrls: ['./services-component.component.css'],
})
export class ServicesComponentComponent implements OnInit {
  showMore = 3;
  showbtn = false;

  services: any = [
    {
      heading1: 'Web Designing',
      btn1: 'See More',
      imageUrl: '../../../assets/images/testImages/serviceImages/servWD.png',
    },
    {
      heading1: 'Web Develepment',
      btn1: 'See More',
      imageUrl: '../../../assets/images/testImages/serviceImages/servDev.png',
    },
    {
      heading1: 'App Development & Support',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/serviceImages/servAD.png',
    },
    {
      heading1: 'Business Analysis',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/serviceImages/bAnalysis.png',
    },
    {
      heading1: 'Content Management',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/serviceImages/cms.png',
    },
    {
      heading1: 'Database Design & maintenance',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/serviceImages/servDb.png',
    },
    {
      heading1: 'Project Management',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/serviceImages/servPM.png',
    },
    {
      heading1: 'Software Installation & Implementation',
      btn1: 'See More',
      imageUrl:
        '/assets/images/testImages/serviceImages/servImplementation.png',
    },
    {
      heading1: 'Software Quality Assurance & Testing',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/serviceImages/servQA.png',
    },
    {
      heading1: 'Game Develpment',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/serviceImages/servGame.png',
    },
    {
      heading1: 'IT Solutions and consulting services',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/serviceImages/servITSolutions.png',
    },
    {
      heading1: 'UI/UX',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/serviceImages/servUI.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
  show() {
    if (this.showMore == 3) {
      this.showMore = 14;
      this.showbtn = true;
    } else {
      this.showMore = 3;
      this.showbtn = false;
      window.scrollTo(0, 200);
    }
  }
}
