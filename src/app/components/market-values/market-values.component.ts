import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DefaultArcObject, PieArcDatum } from 'd3';

type CompetitionTotals = { competition: string, total: number; };

@Component({
  selector: 'app-market-values',
  templateUrl: './market-values.component.html',
  styleUrls: ['./market-values.component.css']
})
export class MarketValuesComponent implements OnInit {
  private marginBars = 100;
  private widthBars = 1200 - (this.marginBars * 2);
  private heightBars = 600 - (this.marginBars);

  private marginPie = 50;
  private widthPie = 750;
  private heightPie = 600

  private radius: number = Math.min(this.widthPie, this.heightPie) / 2 - this.marginPie;

  constructor() { }

  ngOnInit(): void {
    this.createMarketValueChart();
    this.createMostValuableTeamsChart();
  }

  private createMarketValueChart() {
    d3.csv('../../assets/club-data/most_valuable_clubs.csv').then(value => {
      let svg = d3.select('figure#market-value')
        .append('svg')
        .attr('width', this.widthBars + (this.marginBars * 2))
        .attr('height', this.heightBars + (this.marginBars * 2))
        .append('g')
        .attr('transform', 'translate(' + this.marginBars + ',' + this.marginBars / 4 + ')');

      const x = d3.scaleBand()
        .range([0, this.widthBars])
        .domain(value.map(d => d.club))
        .padding(0.2);

      svg.append('g')
        .attr('transform', 'translate(0,' + this.heightBars + ')')
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('font-size', '16px')
        .style('text-anchor', 'end');

      const y = d3.scaleLinear()
        .domain([0, 1100])
        .range([this.heightBars, 0]);

      svg.append('g')
        .call(d3.axisLeft(y).ticks(15))
        .style('font-size', '14px');

      svg.selectAll("bars")
        .data(value)
        .enter()
        .append('rect')
        .attr('x', d => x(d.club))
        .attr('y', d => y(Number(d.market_value)))
        .attr('width', x.bandwidth)
        .attr('height', (d) => this.heightBars - y(Number(d.market_value)))
        .attr('fill', d => this.getCountryColor(d.competition));
    });
  }

  private createMostValuableTeamsChart() {
    d3.csv('../../assets/club-data/most_valuable_clubs.csv').then(value => {
      let leagueTotals = this.prepareData(value);

      let svg = d3.select("figure#country-value")
        .append("svg")
        .attr("width", this.widthPie)
        .attr("height", this.heightPie)
        .append("g")
        .attr(
          "transform",
          "translate(" + this.widthPie / 2 + "," + this.heightPie / 2 + ")"
        );

      const pie = d3.pie<CompetitionTotals>().value(d => d.total);

      const arc = d3.arc<PieArcDatum<CompetitionTotals>>().innerRadius(0).outerRadius(this.radius);

      // Build the pie chart
      svg
        .selectAll('pieces')
        .data(pie(leagueTotals))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => (this.getCountryColor(d.data.competition)))
        .attr("stroke", "#121926")
        .style("stroke-width", "1px");

      // Add labels
      const labelLocation = d3.arc()
        .innerRadius(25)
        .outerRadius(this.radius);

      svg
        .selectAll('pieces')
        .data(pie(leagueTotals))
        .enter()
        .append('text')
        .text(d => d.data.competition + " (" + d.data.total + ")")
        .attr("transform", d => "translate(" + labelLocation.centroid(<any>d) + ")")
        .style("text-anchor", "middle")
        .style('fill', 'white')
        .style("font-size", 15);
    });
  }

  private prepareData(value: d3.DSVRowArray<string>) {
    let clubs = value.map(club => club.competition);

    let totals = new Map<string, number>();
    for (let club of clubs) {
      if (totals.get(club)) {
        totals.set(club, (totals.get(club) + 1));
      } else {
        totals.set(club, 1);
      }
    }

    let leagueTotals: CompetitionTotals[] = [];
    totals.forEach((total, competition) => {
      leagueTotals.push({
        competition: competition,
        total: total
      });
    });
    console.log(leagueTotals);
    return leagueTotals;
  }

  getCountryColor(country: string) {
    switch (country) {
      case 'Premier League':
        return '#c75a93';
      case 'Serie A':
        return '#60a862';
      case 'Bundesliga':
        return '#b2953e';
      case 'La Liga':
        return '#cc5d43';
      default:
        return '#c8c7d1';
    }
  }
}
