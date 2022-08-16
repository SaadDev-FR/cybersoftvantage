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
      imageUrl: '../../../assets/images/testImages/wd.png',
    },
    {
      heading1: 'Web Develepment',
      btn1: 'See More',
      imageUrl: '../../../assets/images/testImages/wdev.png',
    },
    {
      heading1: 'App Development & Support',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/appDev.png',
    },
    {
      heading1: 'Business Analysis',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/ba.png',
    },
    {
      heading1: 'Content Management',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/contentM.png',
    },
    {
      heading1: 'Database Design & maintenance',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/db.png',
    },
    {
      heading1: 'Project Management',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/pm.png',
    },
    {
      heading1: 'Software Installation & Implementation',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/67.png',
    },
    {
      heading1: 'Software Quality Assurance & Testing',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/70.png',
    },
    {
      heading1: 'Media projects',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/mp.png',
    },
    {
      heading1: 'IT Solutions and consulting services',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/consultancy.png',
    },
    {
      heading1: 'UI/UX',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/uiUx.png',
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
