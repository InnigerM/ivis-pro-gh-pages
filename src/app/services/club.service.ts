import { Injectable } from '@angular/core';
import { Club } from '../models/club-data';
import { CsvReaderService } from './csv-reader.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Match } from '../models/match';

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
          let ties: Match[] = [];
          for (let tie of res) {
            ties.push(new Match(tie));
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
}
