import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HistoryServiceService } from 'src/app/shared/historyService/history-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  myFiles: any[] = [];

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    hand: new FormControl('', Validators.required),
    nickname: new FormControl('', Validators.required),
    detail: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
  });

  constructor(
    private HistServ: HistoryServiceService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {}

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
    formData.append('name', this.myForm.value.name);
    formData.append('place', this.myForm.value.place);
    formData.append('hand', this.myForm.value.hand);
    formData.append('nickname', this.myForm.value.nickname);
    formData.append('detail', this.myForm.value.detail);
    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append('files', this.myFiles[i]);
    }
    this.HistServ.filePost(formData);
    this.myFiles = [];
    this.myForm.reset();
  }
}
