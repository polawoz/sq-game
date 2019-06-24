import { Component, OnInit } from '@angular/core';
import { Figure } from '../models/figure.model';
import { FiguresService } from '../figures.service';
import { Team } from '../models/team.model';
import { TeamsService } from '../teams.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-teams-generator',
  templateUrl: './teams-generator.component.html',
  styleUrls: ['./teams-generator.component.scss']
})
export class TeamsGeneratorComponent implements OnInit {

  private readonly destroy$ = new Subject();

  numberOfTeams: number = 0;
  verified: boolean;
  clicked: boolean;
  figures: Figure[];
  teams: Team[] = new Array();

  ngOnInit(): void {
    this.loadFigures();
  }

  constructor(private readonly figuresService: FiguresService, private readonly teamsService: TeamsService) { }

  private loadFigures() {
    this.figures = this.figuresService.getFigures();
  }

  public getPlayersNoCount(): number {
    return this.figures.filter(x => x.isChosen === true).length;
  }

  public getGeneratedTeams(): void {
    this.clicked = true;
    if (this.numberOfTeams === 0) {
      this.verified = false;
      return;
    }
    this.verified = true;
    this.teams = this.figuresService.generateTeamsNativeDivision(this.figures, this.numberOfTeams);
  }

  public saveTeams(): void {
    for (let team of this.teams) {
      this.teamsService.saveTeam(team).pipe(takeUntil(this.destroy$))
      .subscribe(res => {});
    }
  }

}
