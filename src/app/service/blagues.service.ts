import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blague } from '../type/blague.type';

@Injectable({ providedIn: 'root' })
export class BlagueService {
  private BASE_URL = 'http://localhost:3000/blagues/random';

  constructor(private http: HttpClient) {}

  getRandomBlague(): Observable<Blague> {
    return this.http.get<Blague>(this.BASE_URL);
  }
}
