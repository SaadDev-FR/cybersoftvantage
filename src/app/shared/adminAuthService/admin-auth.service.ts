import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  constructor(private http: HttpClient) {}

  getToken() {
    const authToken = localStorage.getItem('token');
    return authToken;
  }
}
