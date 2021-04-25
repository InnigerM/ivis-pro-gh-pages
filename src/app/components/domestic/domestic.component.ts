import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club-data';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.css']
})
export class DomesticComponent implements OnInit {
  public england: Club[];
  public france: Club[];
  public germany: Club[];
  public italy: Club[];
  public spain: Club[];

  constructor(private clubSvc: ClubService) { }

  ngOnInit(): void {
    this.clubSvc.loadLeagueWinners('england').subscribe(clubs => {
      this.england = clubs.filter(club => club.year === 2019);
    });

    // this.clubSvc.loadLeagueWinners('france').subscribe(clubs => {
    //   this.france = clubs.filter(club => club.year === 2018);
    // });

    this.clubSvc.loadLeagueWinners('germany').subscribe(clubs => {
      this.germany = clubs.filter(club => club.year === 2018);
    });

    this.clubSvc.loadLeagueWinners('italy').subscribe(clubs => {
      this.italy = clubs.filter(club => club.year === 2018);
    });

    this.clubSvc.loadLeagueWinners('spain').subscribe(clubs => {
      this.spain = clubs.filter(club => club.year === 2018);
    });
  }

}
