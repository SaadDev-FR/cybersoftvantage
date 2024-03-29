import { PostJobAdvertService } from './../../shared/jobService/post-job-advert.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.css'],
})
export class JobsFormComponent implements OnInit {
  submitted: false;
  applyJobForm: FormGroup;
  myFiles3: any[] = [];
  constructor(
    private applyJobdServ: PostJobAdvertService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.applyJobForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      pNum: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      jTitle: new FormControl(null, Validators.required),
      expertise: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
    });
  }

  onFileChangeApplyJob(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      // const mimetype = this.myFiles[0].fileType;
      // if(mimetype=="image/jpg" || mimetype=="image/jpeg" || mimetype== "image/png" || mimetype=="video/mp4")
      this.myFiles3.push(event.target.files[i]);
    }
  }
  applyJob() {
    let formData3 = new FormData();
    formData3.append('name', this.applyJobForm.value.name);
    formData3.append('pNum', this.applyJobForm.value.pNum);
    formData3.append('email', this.applyJobForm.value.email);
    formData3.append('jTitle', this.applyJobForm.value.jTitle),
      formData3.append('expertise', this.applyJobForm.value.expertise);
    for (var i = 0; i < this.myFiles3.length; i++) {
      formData3.append('files', this.myFiles3[i]);
    }
    this.applyJobdServ.applyForJob(formData3);
    this.myFiles3 = [];
    this.applyJobForm.reset();
  }

  get f() {
    return this.applyJobForm.controls;
  }
}
