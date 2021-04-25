import { Injectable } from '@angular/core';
import { Club } from '../models/club-data';
import { CsvReaderService } from './csv-reader.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClMatch, EnglandMatch, GermanyMatch, ItalyMatch, SpainMatch } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  public clubs: Club[] = [];

  constructor(private csv: CsvReaderService) { }

  public loadClubs(): Observable<Club[]> {
    return this.csv.loadFile('assets/club-data/teamnames.csv')
      .pipe(
        map(res => {
          res.splice(0, 1);
          for (let club of res) {
            const data = club.split(',');
            this.clubs.push({ name: data[1], country: data[0] });
          }
          return this.clubs;
        })
      );
  }

  public loadChampionsLeagueWinners(): Observable<Club[]> {
    return this.csv.loadFile('assets/league-data/champs.csv')
      .pipe(
        map(res => {
          res.splice(0, 1);
          let ties: ClMatch[] = [];
          for (let tie of res) {
            ties.push(new ClMatch(tie));
          }

          ties = ties.filter(tie => {
            return tie.round === "final";
          });

          const clWinners: Club[] = [];
          for (let tie of ties) {
            let club;
            if (tie.winner.name === tie.home.name) {
              club = { name: tie.home.name, country: tie.home.country, year: tie.season };
            } else {
              club = { name: tie.visitor.name, country: tie.visitor.country, year: tie.season };
            }
            clWinners.push(club);
          }
          return clWinners;
        })
      );
  }

  public loadLeagueWinners(league: string): Observable<Club[]> {
    return this.csv.loadFile(`assets/league-data/${league}.csv`)
      .pipe(
        map(res => {
          res.splice(0, 1);
          let allClubs: Club[] = [];
          let ties: EnglandMatch[] = [];
          for (let tie of res) {
            let match;
            if (league === 'england') {
              match = new EnglandMatch(tie);
            } else if (league === 'germany') {
              match = new GermanyMatch(tie);
            } else if (league === 'italy') {
              match = new ItalyMatch(tie);
            } else if (league === 'spain') {
              match = new SpainMatch(tie);
            }
            if (match.division === 1) {
              ties.push(match);
              if (allClubs.filter(club => club.name == match.winner.name && club.year === match.season).length === 0) {
                const winner = { name: match.winner.name, country: match.winner.country, year: match.season, wins: 0, draws: 0, points: 0 };
                allClubs.push(winner);
              }
            }
          }

          for (let tie of ties) {
            allClubs.map(club => {
              if (tie.isDraw && tie.season === club.year && (club.name === tie.visitor.name || club.name === tie.home.name)) {
                club.points = club.points + 1;
                club.draws = club.draws + 1;
              }
              if (club.name === tie.winner.name && club.year === tie.season && !tie.isDraw) {
                club.points = club.points + 3;
                club.wins = club.wins + 1;
              }
            });
          }
          allClubs.sort((a, b) => b.points - a.points);
          return allClubs;
        })
      );
  }
}
