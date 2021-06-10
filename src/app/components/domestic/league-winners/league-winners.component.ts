import { Component, Input, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club-data';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-league-winners',
  templateUrl: './league-winners.component.html',
  styleUrls: ['./league-winners.component.css']
})
export class LeagueWinnersComponent implements OnInit {
  @Input() dataSet: Club[];
  @Input() isLoading: boolean;

  public displayedColumns: string[] = ['position', 'name', 'country', 'wins', 'draws', 'points'];

  constructor() { }

  ngOnInit(): void {

  }


}
