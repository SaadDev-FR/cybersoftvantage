import { Router } from '@angular/router';
import { AdminServiceService } from './../../../shared/adminService/admin-service.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-admin-login-panel',
  templateUrl: './admin-login-panel.component.html',
  styleUrls: ['./admin-login-panel.component.css'],
})
export class AdminLoginPanelComponent implements OnInit {
  submitted: false;
  adminForm: FormGroup;

  constructor(
    private adminServ: AdminServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.adminForm = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  login() {
    const val = this.adminForm.value;
    if (!val.email && !val.password) {
      alert('Please Enter Email & password');
    } else if (val.email && val.password) {
      this.adminServ.login(val.email, val.password).subscribe(
        (res) => {
          console.log(res);
          if (res && res?.token) {
            localStorage.setItem('token', JSON.stringify(res.token));
            alert('You are Logged in');
            this.router.navigate(['admin-home']);
          } else {
            alert(res);
          }
        },
        (err) => {
          alert('Credentials wrong!');
        }
      );
    }
  }
  get f() {
    return this.adminForm.controls;
  }
}
