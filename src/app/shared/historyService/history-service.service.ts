import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryServiceService {
  constructor(private http: HttpClient) {}

  filePost(data: any) {
    // const requestHeaders = {
    //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //   'Access-Control-Allow-Origin': '*',
    // };
    // const requestOptions = new HttpHeaders(requestHeaders);

    this.http
      .post('http://localhost:8000/api/uploadhistory', data)
      .subscribe((res) => {
        alert(res);
      });
  }
}
