import { PostInternPostService } from './../../shared/internService/post-intern-post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern-advert',
  templateUrl: './intern-advert.component.html',
  styleUrls: ['./intern-advert.component.css'],
})
export class InternAdvertComponent implements OnInit {
  jobsLength: any;
  internAdvertArray = [
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
    private internServ: PostInternPostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.internServ.getInternAdvert().subscribe((res) => {
      this.internAdvertArray = res;
      for (let i = 0; i < this.internAdvertArray.length; i++) {
        this.internAdvertArray[i].url =
          'http://localhost:8000/' +
          this.internAdvertArray[i].files[0].filePath;
        this.jobsLength = this.internAdvertArray.length;
      }
    });
    console.log(this.internAdvertArray);
  }

  moveToJobs() {
    this.router.navigateByUrl('/intern-form');
  }
  isReadMore = true;

  showText(i: number) {
    this.internAdvertArray[i].expanded = !this.internAdvertArray[i].expanded;
  }
}
