import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  FirstSlide: any = '../../../assets/images/slider1.jpg';
  secondSlide: any = '../../../assets/images/slider2.jpg';
  thirdSlide: any = '../../../assets/images/slider3.webp';
  showMore = 3;
  showbtn = false;
  objectKeys = Object.keys;
  skills: any = [
    {
      heading1: 'Web Designing',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'Web Develepment',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'App Development & Support',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'Business Analysis',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'Android & IOS',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'Content Management',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'Database Design & maintenance',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'E-Government & Web Applications',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'Project Management',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'Software Installation & Implementation',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'Software Quality Assurance & Testing',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'Media projects',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'IT Solutions and consulting services',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
    {
      heading1: 'UI/UX',
      btn1: 'See More',
      imageUrl: '/assets/images/testImages/testSkills.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
  show() {
    if (this.showMore == 3) {
      this.showMore = 11;
      this.showbtn = true;
    } else {
      this.showMore = 3;
      this.showbtn = false;
      window.scrollTo(0, 700);
    }
  }
}
