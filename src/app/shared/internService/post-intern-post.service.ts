import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostInternPostService {
  constructor(private http: HttpClient) {}

  postInternPosition(data: any) {
    this.http
      .post('http://localhost:8000/api/intern', data)
      .subscribe((res) => {
        alert(res);
      });
  }

  getInternAdvert(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/GetInternAdvert').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
