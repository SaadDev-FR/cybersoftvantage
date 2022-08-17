import { Router } from '@angular/router';
import { PostInternPostService } from './../../../shared/internService/post-intern-post.service';
import { PostJobAdvertService } from './../../../shared/jobService/post-job-advert.service';
import { TeamServiceService } from './../../../shared/teamService/team-service.service';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private postJobServ: PostJobAdvertService,
    private interServ: PostInternPostService,
    private teamServ: TeamServiceService,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {}

  // TeamFormData
  myFiles: any[] = [];
  myForm = new FormGroup({
    jobTitle: new FormControl('', Validators.required),
    jobType: new FormControl('', Validators.required),
    expertise: new FormControl('', Validators.required),
    jobDesc: new FormControl('', Validators.required),
    deadline: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
  });

  get f() {
    return this.myForm.controls;
  }
  onFileChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      // const mimetype = this.myFiles[0].fileType;
      // if(mimetype=="image/jpg" || mimetype=="image/jpeg" || mimetype== "image/png" || mimetype=="video/mp4")
      this.myFiles.push(event.target.files[i]);
    }
  }
  submit() {
    let formData = new FormData();
    formData.append('jobTitle', this.myForm.value.jobTitle);
    formData.append('jobType', this.myForm.value.jobType);
    formData.append('expertise', this.myForm.value.expertise);
    formData.append('jobDesc', this.myForm.value.jobDesc);
    formData.append('deadline', this.myForm.value.deadline);
    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append('files', this.myFiles[i]);
    }

    this.postJobServ.postJob(formData);
    this.myFiles = [];
    this.myForm.reset();
  }
  // TeamFormDataEnd

  //NewJobAdvert

  myFiles2: any[] = [];

  internForm = new FormGroup({
    jobTitle: new FormControl('', Validators.required),
    jobType: new FormControl('', Validators.required),
    expertise: new FormControl('', Validators.required),
    jobDesc: new FormControl('', Validators.required),
    deadline: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
  });

  onFileChangeIntern(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      // const mimetype = this.myFiles[0].fileType;
      // if(mimetype=="image/jpg" || mimetype=="image/jpeg" || mimetype== "image/png" || mimetype=="video/mp4")
      this.myFiles2.push(event.target.files[i]);
    }
  }
  submitIntern() {
    let formData2 = new FormData();
    formData2.append('jobTitle', this.internForm.value.jobTitle);
    formData2.append('jobType', this.internForm.value.jobType);
    formData2.append('expertise', this.internForm.value.expertise);
    formData2.append('jobDesc', this.internForm.value.jobDesc);
    formData2.append('deadline', this.internForm.value.deadline);
    for (var i = 0; i < this.myFiles2.length; i++) {
      formData2.append('files', this.myFiles2[i]);
    }

    this.interServ.postInternPosition(formData2);
    this.myFiles2 = [];
    this.internForm.reset();
  }
  // //NewJobAdvertEnd

  //TeamUpload

  myFiles3: any[] = [];

  TeamForm = new FormGroup({
    name: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
  });

  onFileChangeTeam(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      // const mimetype = this.myFiles[0].fileType;
      // if(mimetype=="image/jpg" || mimetype=="image/jpeg" || mimetype== "image/png" || mimetype=="video/mp4")
      this.myFiles3.push(event.target.files[i]);
    }
  }
  submitTeam() {
    let formData3 = new FormData();
    formData3.append('name', this.TeamForm.value.name);
    formData3.append('designation', this.TeamForm.value.designation);
    for (var i = 0; i < this.myFiles3.length; i++) {
      formData3.append('files', this.myFiles3[i]);
    }

    this.teamServ.postTeam(formData3);
    this.myFiles3 = [];
    this.TeamForm.reset();
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['admin-login-panel']);
    return true;
  }
}
