import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostJobAdvertService {
  constructor(private http: HttpClient) {}

  postJob(data: any) {
    this.http
      .post('http://localhost:8000/api/newJob', data)
      .subscribe((res) => {
        alert(res);
      });
  }
  applyForJob(data: any) {
    this.http
      .post('http://localhost:8000/api/applyJob', data)
      .subscribe((res) => {
        alert(res);
      });
  }

  getJobsAdvert(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/GetJobsAdvert').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
