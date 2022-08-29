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
    return this.http
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
  getJobsApplicants(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/GetJobApplicant').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getContactUsData(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/GetcontactUs').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postContactUsData(mailFormValue: any): Observable<any> {
    console.log(mailFormValue.value);
    return this.http.post(
      'http://localhost:8000/api/contactUsData',
      mailFormValue.value
    );
  }
  REST_API: string = 'http://localhost:8000/api';

  updateBook(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/Update/${id}`;
    return this.http.put(API_URL, data);
  }

  viewOrder(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/GetJobsAdvert').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
