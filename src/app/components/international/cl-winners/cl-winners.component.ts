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

  public isLoading = true;

  private clWinners: Club[];

  private winsByCountry: Country[] = [];
  private countrySvg;

  private winsByClub: Club[] = [];
  private clubSvg;

  private margin = 100;
  private width = 1200 - (this.margin * 2);
  private height = 600 - (this.margin);

  constructor(private clubSvc: ClubService) { }

  ngOnInit(): void {
    this.clubSvc.loadChampionsLeagueWinners().subscribe(clubs => {
      this.isLoading = true;

      this.clWinners = clubs;

      this.countWinnersByClub();
      this.createClubSvg();
      this.drawClubBars(this.winsByClub);

      this.isLoading = false;
    });
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

  private createClubSvg(): void {
    this.clubSvg = d3.select('figure#club')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin / 4 + ')');
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
      .style('font-size', '16px')
      .style('text-anchor', 'end');

    const y = d3.scaleLinear()
      .domain([0, 15])
      .range([this.height, 0]);

    this.clubSvg.append('g')
      .call(d3.axisLeft(y).ticks(15))
      .style('font-size', '14px');

    this.clubSvg.selectAll("bars")
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.wins))
      .attr('width', x.bandwidth)
      .attr('height', (d) => this.height - y(d.wins))
      .attr('fill', d => this.getCountryColor(d.country));
  }

  getCountryColor(country: string) {
    switch (country) {
      case 'ENG':
        return '#c75a93';
      case 'ITA':
        return '#60a862';
      case 'GER':
        return '#b2953e';
      case 'ESP':
        return '#cc5d43';
      default:
        return '#c8c7d1';
    }
  }
}
