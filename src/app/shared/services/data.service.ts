import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfiles } from '../interface/profile';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);
  baseUrl: string = 'https://randomuser.me/api/';

  public getProfiles(
    length: number = 20,
    seed: string = 'abc'
  ): Observable<IProfiles> {
    let url = `${this.baseUrl}?results=${length}&seed=${seed}`;

    return this.http.get(url) as Observable<IProfiles>;
  }

  public getRandomProfiles(count: number = 20): Observable<IProfiles> {
    let url = `${this.baseUrl}?results=${count}`;

    return this.http.get(url) as Observable<IProfiles>;
  }
}
