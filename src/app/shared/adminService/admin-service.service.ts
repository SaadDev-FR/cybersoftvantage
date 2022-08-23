import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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

  getInternData(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/applyIntern').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
