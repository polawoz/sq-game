import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Team } from './models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(readonly http: HttpClient) { }

  public saveTeam(team: Team): Observable<Team> {
    return this.http.post<Team>('/api/teams', team);
  }

}
