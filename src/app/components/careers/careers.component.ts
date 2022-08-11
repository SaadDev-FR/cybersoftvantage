import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})
export class CareersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  moveToInternship() {
    this.router.navigateByUrl('/intern-advert');
  }
  moveToJobs() {
    this.router.navigateByUrl('/jobs-advert');
  }

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }
}
