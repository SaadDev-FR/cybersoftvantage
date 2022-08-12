import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostInternPostService } from 'src/app/shared/internService/post-intern-post.service';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrls: ['./intern-form.component.css'],
})
export class InternFormComponent implements OnInit {
  constructor(private internApplyServ: PostInternPostService) {}

  ngOnInit(): void {}

  myFiles3: any[] = [];

  applyJobForm = new FormGroup({
    name: new FormControl('', Validators.required),
    pNum: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    expertise: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
  });

  onFileChangeApplyIntern(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      // const mimetype = this.myFiles[0].fileType;
      // if(mimetype=="image/jpg" || mimetype=="image/jpeg" || mimetype== "image/png" || mimetype=="video/mp4")
      this.myFiles3.push(event.target.files[i]);
    }
  }
  applyIntern() {
    let formData3 = new FormData();
    formData3.append('name', this.applyJobForm.value.name);
    formData3.append('pNum', this.applyJobForm.value.pNum);
    formData3.append('email', this.applyJobForm.value.email);
    formData3.append('expertise', this.applyJobForm.value.expertise);
    for (var i = 0; i < this.myFiles3.length; i++) {
      formData3.append('files', this.myFiles3[i]);
    }

    this.internApplyServ.applyInternPosition(formData3);
    this.myFiles3 = [];
    this.applyJobForm.reset();
  }
}
