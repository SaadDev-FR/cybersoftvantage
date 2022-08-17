import { Router } from '@angular/router';
import { AdminServiceService } from './../../../shared/adminService/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login-panel',
  templateUrl: './admin-login-panel.component.html',
  styleUrls: ['./admin-login-panel.component.css'],
})
export class AdminLoginPanelComponent implements OnInit {
  adminForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });
  constructor(private adminServ: AdminServiceService, private router: Router) {}
  ngOnInit(): void {}
  login() {
    const val = this.adminForm.value;
    console.log('value is::', val);

    if (val.email && val.password) {
      console.log('service data::', this.adminServ);
      this.adminServ
        .login(val.email, val.password)

        .subscribe((res) => {
          console.log('User is logged in', res);
          console.log('Token is:', res.token);
          if (res && res?.token) {
            localStorage.setItem('token', JSON.stringify(res.token));

            this.router.navigate(['admin-home']);
          } else {
            alert('Invalid username or password');
          }
        });
    }
  }
}
