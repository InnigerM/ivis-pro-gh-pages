import { Component, OnInit } from '@angular/core';
import { Club, Country } from 'src/app/models/club-data';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.css']
})
export class CountryStatsComponent implements OnInit {
  private winsByCountry: Country[] = [];
  private clWinners: Club[] = [];

  constructor(private clubSvc: ClubService) { }

  ngOnInit(): void {
    this.clubSvc.loadChampionsLeagueWinners().subscribe(clubs => {
      this.clWinners = clubs;
      this.countWinnersByCountry(1957);
    });
  }

  public countWinnersByCountry(year: number): Country[] {
    this.winsByCountry = [];
    const winsByCountry: Map<string, number> = new Map();
    for (let winner of this.clWinners) {
      if (winner.year >= year) {
        if (winsByCountry.has(winner.country)) {
          winsByCountry.set(winner.country, winsByCountry.get(winner.country) + 1);
        } else {
          winsByCountry.set(winner.country, 1);
        }
      }
    }

    winsByCountry.forEach((count, country) => {
      country = this.convertCountry(country);
      this.winsByCountry.push({ country: country, count: count });
    });

    this.winsByCountry.sort((a, b) => b.count - a.count);
    return this.winsByCountry;
  }

  private convertCountry(country: string): string {
    switch (country) {
      case 'ESP': return 'Spain';
      case 'ITA': return 'Italy';
      case 'ENG': return 'England';
      case 'GER': return 'Germany';
      case 'NED': return 'Netherlands';
      case 'POR': return 'Portugal';
      case 'SCO': return 'Scotland';
      case 'ROU': return 'Russia';
      case 'SRB': return 'Serbia';
      case 'FRA': return 'France';
      default: return country;
    }
  }
}
