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
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor(private clubSvc: ClubService) { }

  ngOnInit(): void {
    this.clubSvc.loadChampionsLeagueWinners().subscribe(clubs => {
      this.clWinners = clubs;
      this.countWinnersByCountry();
      this.createSvg();
      this.drawBars(this.winsByCountry);
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

  private createSvg(): void {
    this.svg = d3.select('figure#bar')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: any[]): void {
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.country))
      .padding(0.2);

    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    const y = d3.scaleLinear()
      .domain([0, 20])
      .range([this.height, 0]);

    this.svg.append('g')
      .call(d3.axisLeft(y));

    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.country))
      .attr('y', d => y(d.count))
      .attr('width', x.bandwidth)
      .attr('height', (d) => this.height - y(d.count))
      .attr('fill', '#d04a35');
  }
}
