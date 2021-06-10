import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club-data';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.css']
})
export class DomesticComponent implements OnInit {

  public _dataSet: Club[];

  public get dataSet() {
    switch (this.selectedLeague) {
      case 'england':
        this.isLoading = this.isLoadingEngland;
        return this.england.filter(club => club.year === this.selectedYear);
      case 'spain':
        this.isLoading = this.isLoadingSpain;
        return this.spain.filter(club => club.year === this.selectedYear);
      case 'germany':
        this.isLoading = this.isLoadingGermany;
        return this.germany.filter(club => club.year === this.selectedYear);
      case 'italy':
        this.isLoading = this.isLoadingItaly;
        return this.italy.filter(club => club.year === this.selectedYear);
    }
  }

  public selectedYear: number = 2019;
  public selectedLeague: string = 'england';

  public isLoading = true;

  private england: Club[] = [];
  public eligibleYearsEngland: number[];
  private isLoadingEngland = true;

  private germany: Club[] = [];
  public eligibleYearsGermany: number[];
  private isLoadingGermany = true;

  private italy: Club[] = [];
  public eligibleYearsItaly: number[];
  private isLoadingItaly = true;

  private spain: Club[] = [];
  public eligibleYearsSpain: number[];
  private isLoadingSpain = true;


  constructor(private clubSvc: ClubService) { }

  ngOnInit(): void {
    this.clubSvc.loadLeagueWinners('england').subscribe(clubs => {
      this.england = clubs;
      const eligibleYears = this.england.map(club => club.year);
      this.eligibleYearsEngland = [...new Set(eligibleYears)].sort((a, b) => b - a);
      this.isLoadingEngland = false;
    });

    this.clubSvc.loadLeagueWinners('germany').subscribe(clubs => {
      this.germany = clubs;
      const eligibleYears = this.germany.map(club => club.year);
      this.eligibleYearsGermany = [...new Set(eligibleYears)].sort((a, b) => b - a);
      this.isLoadingGermany = false;
    });

    this.clubSvc.loadLeagueWinners('italy').subscribe(clubs => {
      this.italy = clubs;
      const eligibleYears = this.italy.map(club => club.year);
      this.eligibleYearsItaly = [...new Set(eligibleYears)].sort((a, b) => b - a);
      this.isLoadingItaly = false;
    });

    this.clubSvc.loadLeagueWinners('spain').subscribe(clubs => {
      this.spain = clubs;
      const eligibleYears = this.spain.map(club => club.year);
      this.eligibleYearsSpain = [...new Set(eligibleYears)].sort((a, b) => b - a);
      this.isLoadingSpain = false;
    });

    this.isLoading = this.isLoadingEngland;
  }


}
