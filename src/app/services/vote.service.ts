import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vote } from '../pages/models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private apiUrl = 'http://localhost:5167/api/Vote';

  constructor(private http: HttpClient) {}

  getVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.apiUrl);
  }

  getVotesById(id: number): Observable<Vote> {
    return this.http.get<Vote>(this.apiUrl + `?${id}`)
  }
}
