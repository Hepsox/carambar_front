import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blague } from '../type/blague.type';

@Injectable({ providedIn: 'root' })
export class BlagueService {
  private BASE_URL = 'https://carambar-back-1s6g.onrender.com';

  constructor(private http: HttpClient) {}

  getRandomBlague(): Observable<Blague> {
    return this.http.get<Blague>(this.BASE_URL + '/blagues/random');
  }
}
