import { PostInternPostService } from './../../shared/internService/post-intern-post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern-advert',
  templateUrl: './intern-advert.component.html',
  styleUrls: ['./intern-advert.component.css'],
})
export class InternAdvertComponent implements OnInit {
  internAdvertArray = [
    {
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
      }
    });
    console.log(this.internAdvertArray);
  }

  moveToJobs() {
    this.router.navigateByUrl('/intern-form');
  }
}
