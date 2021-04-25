import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Club, Country } from 'src/app/models/club-data';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-cl-winners',
  templateUrl: './cl-winners.component.html',
  styleUrls: ['./cl-winners.component.css']
})
export class ClWinnersComponent implements OnInit {

  private clWinners: Club[];

  private winsByCountry: Country[] = [];
  private countrySvg;

  private winsByClub: Club[] = [];
  private clubSvg;

  private margin = 100;
  private width = 1200 - (this.margin * 2);
  private height = 600 - (this.margin * 2);

  constructor(private clubSvc: ClubService) { }

  ngOnInit(): void {
    this.clubSvc.loadChampionsLeagueWinners().subscribe(clubs => {
      this.clWinners = clubs;

      this.countWinnersByCountry();
      this.createCountrySvg();
      this.drawCountryBars(this.winsByCountry);
      console.log(this.clWinners);

      this.countWinnersByClub();
      this.createClubSvg();
      this.drawClubBars(this.winsByClub);

      this.clubSvc.loadLeagueWinners('england').subscribe(clubs => {
        console.log(clubs);
        console.log(clubs.filter(club => club.year === 2000))
      });
    });
  }

  private countWinnersByCountry(): void {
    const winsByCountry: Map<string, number> = new Map();
    for (let winner of this.clWinners) {
      if (winsByCountry.has(winner.country)) {
        winsByCountry.set(winner.country, winsByCountry.get(winner.country) + 1);
      } else {
        winsByCountry.set(winner.country, 1);
      }
    }

    winsByCountry.forEach((count, country) => {
      this.winsByCountry.push({ country: country, count: count });
    });

    this.winsByCountry.sort((a, b) => b.count - a.count);
  }

  private countWinnersByClub(): void {
    const winsByClub: Club[] = [];
    this.clWinners.map(club => {
      const clubFound = winsByClub.find(c => {
        return c.name === club.name;
      });
      if (clubFound) {
        clubFound.wins = clubFound.wins + 1;
      } else {
        club.wins = 1;
        winsByClub.push(club);
      }
    });
    winsByClub.sort((a, b) => b.wins - a.wins);
    this.winsByClub = winsByClub;
  }

  private createCountrySvg(): void {
    this.countrySvg = d3.select('figure#country')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawCountryBars(data: any[]): void {
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.country))
      .padding(0.2);

    this.countrySvg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('font-size', '12px')
      .style('text-anchor', 'end');

    const y = d3.scaleLinear()
      .domain([0, 20])
      .range([this.height, 0]);

    this.countrySvg.append('g')
      .call(d3.axisLeft(y))
      .style('font-size', '12px');

    this.countrySvg.selectAll("bars")
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.country))
      .attr('y', d => y(d.count))
      .attr('width', x.bandwidth)
      .attr('height', (d) => this.height - y(d.count))
      .attr('fill', '#f59842');
  }

  private createClubSvg(): void {
    this.clubSvg = d3.select('figure#club')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawClubBars(data: any[]): void {
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.name))
      .padding(0.2);

    this.clubSvg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('font-size', '12px')
      .style('text-anchor', 'end');

    const y = d3.scaleLinear()
      .domain([0, 15])
      .range([this.height, 0]);

    this.clubSvg.append('g')
      .call(d3.axisLeft(y).ticks(15))
      .style('font-size', '12px');

    this.clubSvg.selectAll("bars")
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.wins))
      .attr('width', x.bandwidth)
      .attr('height', (d) => this.height - y(d.wins))
      .attr('fill', '#f59842');
  }
}
