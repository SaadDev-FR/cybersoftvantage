import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:8000/api/login', {
      email,
      password,
    });
  }
}
