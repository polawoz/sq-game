import { Injectable } from '@angular/core';
import { Figure } from './models/figure.model';
import { Team } from './models/team.model';

@Injectable({
  providedIn: 'root'
})
export class FiguresService {

  figures: Figure[] = [{
    id: 1,
    firstName: 'Jola',
    lastName: 'Kowalska',
    nativeLanguage: 'polish',
    isChosen: false
  },
  {
    id: 2,
    firstName: 'Adrian',
    lastName: 'Weber',
    nativeLanguage: 'german',
    isChosen: false
  },
  {
    id: 3,
    firstName: 'Adrianna',
    lastName: 'Weber',
    nativeLanguage: 'german',
    isChosen: false
  },
  {
    id: 4,
    firstName: 'Alicja',
    lastName: 'Weber',
    nativeLanguage: 'polish',
    isChosen: false
  },
  {
    id: 5,
    firstName: 'Jan',
    lastName: 'Nowak',
    nativeLanguage: 'polish',
    isChosen: false
  },
  {
    id: 6,
    firstName: 'Tilo',
    lastName: 'Weber',
    nativeLanguage: 'german',
    isChosen: true
  },

  {
    id: 7,
    firstName: 'Wolfgang',
    lastName: 'Strauss',
    nativeLanguage: 'german',
    isChosen: true
  }
  ];

  constructor() { }

  public getFigures(): Figure[] {
    return this.figures;
  }

  public generateTeamsNoNativeDivision(figures: Figure[], numberOfTeams: number): Team[] {
    let teams = new Array();
    let chosenFigures = figures.filter(x => x.isChosen === true);
    let playersPerTeam = chosenFigures.length / numberOfTeams;


    for (let j = 0; j < numberOfTeams; j++) {
      let team: Team = {
        id: j + 1,
        members: new Array(),
        score: 0
      };
      teams.push(team);
    }

    for (let p = 0; p < playersPerTeam; p++) {
      for (let t = 0; t < teams.length; t++) {
        if (chosenFigures.length === 0) {
          break;
        }
        let generatedIndex = Math.floor(Math.random() * chosenFigures.length);
        if (generatedIndex === chosenFigures.length) {
          generatedIndex = chosenFigures.length - 1;
        }
        teams[t].members.push(chosenFigures[generatedIndex]);
        chosenFigures.splice(generatedIndex, 1);
      }
    }
    return teams.filter(x => x.members.length !== 0);
  }

  public generateTeamsNativeDivision(figures: Figure[], numberOfTeams: number): Team[] {
    let teams = new Array();
    let chosenFigures = figures.filter(x => x.isChosen === true);
    let playersPerTeam = chosenFigures.length / numberOfTeams;

    let polishMembers = chosenFigures.filter(x => x.nativeLanguage === 'polish');
    let germanMembers = chosenFigures.filter(x => x.nativeLanguage === 'german');

    for (let j = 0; j < numberOfTeams; j++) {
      let team: Team = {
        id: j + 1,
        members: new Array(),
        score: 0
      };
      teams.push(team);
    }

    for (let p = 0; p < playersPerTeam; p++) {
      for (let t = 0; t < teams.length; t++) {
        if (polishMembers.length !== 0) {
          this.generateIndexAndRemoveFromList(polishMembers, teams[t]);
        } else if (germanMembers.length !== 0) {
          this.generateIndexAndRemoveFromList(germanMembers, teams[t]);
        } else {
          break;
        }
      }
    }
    return teams.filter(x => x.members.length !== 0);
  }

  private generateIndexAndRemoveFromList(figuresToAllocate: Figure[], team: Team): void {
    let generatedIndex = Math.floor(Math.random() * figuresToAllocate.length);
    if (generatedIndex === figuresToAllocate.length) {
      generatedIndex = figuresToAllocate.length - 1;
    }
    team.members.push(figuresToAllocate[generatedIndex]);
    figuresToAllocate.splice(generatedIndex, 1);
  }

}
