import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  LogoImageSrc: any = '../../../assets/images/TransparentLogo1.png';
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
  constructor(private router: Router) {}

  ngOnInit(): void {
    AOS.init();
  }
  navigateToAdmin() {
    this.router.navigate(['admin-home']);
  }
  show() {
    if (this.showMore == 3) {
      this.showMore = 14;
      this.showbtn = true;
    } else {
      this.showMore = 3;
      this.showbtn = false;
      window.scrollTo(0, 700);
    }
  }
}
