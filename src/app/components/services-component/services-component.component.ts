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
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'Web Develepment',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'App Development ',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'Business Analysis',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'Android & IOS',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'Content Management',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'Database Design & maintenance',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'E-Government & Web Applications',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'Project Management',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'Software Installation & Implementation',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'SQA & Testing',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'Media projects',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'IT Solutions and consulting services',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'UI/UX',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
    },
    {
      heading1: 'Digital marketing',
      imageUrl: '/assets/images/testImages/testSkills.png',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, amet.',
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
