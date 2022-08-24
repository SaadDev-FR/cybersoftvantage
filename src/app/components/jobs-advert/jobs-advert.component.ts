import { Router } from '@angular/router';
import { PostJobAdvertService } from './../../shared/jobService/post-job-advert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-advert',
  templateUrl: './jobs-advert.component.html',
  styleUrls: ['./jobs-advert.component.css'],
})
export class JobsAdvertComponent implements OnInit {
  jobsLength: any;
  JobsAdvertArray = [
    {
      expanded: false,
      files: [
        {
          filePath: '',
          fileType: '',
        },
      ],
      jobTitle: '',
      jobType: '',
      expertise: '',
      jobDesc: '',
      deadline: '',
      industry: '',
      functionalArea: '',
      totalPositions: '',
      jobShift: '',
      jobLocation: '',
      gender: '',
      minimumEducation: '',
      careerLevel: '',
      minimumExpertise: '',
      applyBefore: '',
      postingDate: '',
      extraKnowledge: '',
      url: '',
    },
  ];
  constructor(
    private postJobServ: PostJobAdvertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postJobServ.getJobsAdvert().subscribe((res) => {
      this.JobsAdvertArray = res;
      for (let i = 0; i < this.JobsAdvertArray.length; i++) {
        this.JobsAdvertArray[i].url =
          'http://localhost:8000/' + this.JobsAdvertArray[i].files[0].filePath;
        this.jobsLength = this.JobsAdvertArray.length;
      }
    });
  }

  moveToJobs() {
    this.router.navigateByUrl('/jobs-form');
  }

  showText(i: number) {
    this.JobsAdvertArray[i].expanded = !this.JobsAdvertArray[i].expanded;
  }
}
