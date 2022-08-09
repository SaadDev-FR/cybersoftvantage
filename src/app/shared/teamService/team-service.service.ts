import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamServiceService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/GetTeam').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}