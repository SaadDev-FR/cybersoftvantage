import { PostJobAdvertService } from './../../shared/jobService/post-job-advert.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  submitted = false;
  mailForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private jobService: PostJobAdvertService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.mailForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  submitForm() {
    this.jobService.postContactUsData(this.mailForm).subscribe((res) => {
      alert(res);
    });
  }
  get f() {
    return this.mailForm.controls;
  }
  //
}
