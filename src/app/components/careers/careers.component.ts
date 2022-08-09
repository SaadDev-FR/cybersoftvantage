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
  moveToJobs() {
    this.router.navigateByUrl('/jobs-form');
  }
  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }
}
