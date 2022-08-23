import { AdminServiceService } from './../../../shared/adminService/admin-service.service';
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
  //  getInternData

  InterneeData = [
    {
      files: [
        {
          filePath: '',
          fileType: '',
        },
      ],
      name: '',
      pNum: '',
      email: '',
      expertise: '',
      url: '',
    },
  ];
  jobsData = [
    {
      files: [
        {
          filePath: '',
          fileType: '',
        },
      ],
      name: '',
      pNum: '',
      email: '',
      expertise: '',
      url: '',
    },
  ];
  applicantsLength: any;
  constructor(
    private postJobServ: PostJobAdvertService,
    private interServ: PostInternPostService,
    private teamServ: TeamServiceService,
    private internData: PostInternPostService,

    private router: Router
  ) {}
  ngOnInit(): void {
    this.internData.getInternApplicants().subscribe((res) => {
      this.InterneeData = res;
      for (let i = 0; i < this.InterneeData.length; i++) {
        this.InterneeData[i].url =
          'http://localhost:8000/' + this.InterneeData[i].files[0].filePath;
        this.applicantsLength = this.InterneeData.length;
      }
    });
    this.postJobServ.getJobsApplicants().subscribe((res) => {
      this.jobsData = res;
      for (let i = 0; i < this.jobsData.length; i++) {
        this.jobsData[i].url =
          'http://localhost:8000/' + this.jobsData[i].files[0].filePath;
        this.applicantsLength = this.jobsData.length;
      }
    });
  }

  // TeamFormData
  myFiles: any[] = [];
  myForm = new FormGroup({
    jobTitle: new FormControl('', Validators.required),
    industry: new FormControl('', Validators.required),
    functionalArea: new FormControl('', Validators.required),
    totalPositions: new FormControl('', Validators.required),
    jobShift: new FormControl('', Validators.required),
    jobType: new FormControl('', Validators.required),
    jobLocation: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    minimumEducation: new FormControl('', Validators.required),
    careerLevel: new FormControl('', Validators.required),
    minimumExpertise: new FormControl('', Validators.required),
    applyBefore: new FormControl('', Validators.required),
    postingDate: new FormControl('', Validators.required),
    jobDesc: new FormControl('', Validators.required),
    extraKnowledge: new FormControl('', Validators.required),
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
    formData.append('industry', this.myForm.value.industry);
    formData.append('functionalArea', this.myForm.value.functionalArea);
    formData.append('totalPositions', this.myForm.value.totalPositions);
    formData.append('jobShift', this.myForm.value.jobShift);
    formData.append('jobType', this.myForm.value.jobType);
    formData.append('jobLocation', this.myForm.value.jobLocation);
    formData.append('gender', this.myForm.value.gender);
    formData.append('minimumEducation', this.myForm.value.minimumEducation);
    formData.append('careerLevel', this.myForm.value.careerLevel);
    formData.append('minimumExpertise', this.myForm.value.minimumExpertise);
    formData.append('applyBefore', this.myForm.value.applyBefore);
    formData.append('postingDate', this.myForm.value.postingDate);
    formData.append('jobDesc', this.myForm.value.jobDesc);
    formData.append('extraKnowledge', this.myForm.value.extraKnowledge);
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
    industry: new FormControl('', Validators.required),
    functionalArea: new FormControl('', Validators.required),
    totalPositions: new FormControl('', Validators.required),
    jobShift: new FormControl('', Validators.required),
    jobType: new FormControl('', Validators.required),
    jobLocation: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    minimumEducation: new FormControl('', Validators.required),
    careerLevel: new FormControl('', Validators.required),
    minimumExpertise: new FormControl('', Validators.required),
    applyBefore: new FormControl('', Validators.required),
    postingDate: new FormControl('', Validators.required),
    jobDesc: new FormControl('', Validators.required),
    extraKnowledge: new FormControl('', Validators.required),
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
    formData2.append('industry', this.internForm.value.industry);
    formData2.append('functionalArea', this.internForm.value.functionalArea);
    formData2.append('totalPositions', this.internForm.value.totalPositions);
    formData2.append('jobShift', this.internForm.value.jobShift);
    formData2.append('jobType', this.internForm.value.jobType);
    formData2.append('jobLocation', this.internForm.value.jobLocation);
    formData2.append('gender', this.internForm.value.gender);
    formData2.append(
      'minimumEducation',
      this.internForm.value.minimumEducation
    );
    formData2.append('careerLevel', this.internForm.value.careerLevel);
    formData2.append(
      'minimumExpertise',
      this.internForm.value.minimumExpertise
    );
    formData2.append('applyBefore', this.internForm.value.applyBefore);
    formData2.append('postingDate', this.internForm.value.postingDate);
    formData2.append('jobDesc', this.internForm.value.jobDesc);
    formData2.append('extraKnowledge', this.internForm.value.extraKnowledge);
    for (var i = 0; i < this.myFiles.length; i++) {
      formData2.append('files', this.myFiles[i]);
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
    console.log('test::', this.TeamForm.value);
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
