import { Club } from "./club-data";

export class ClMatch {
  date: Date;
  season: number;
  round: string;
  leg: number;
  home: Club;
  visitor: Club;
  winner: Club;

  constructor(matchData: string) {
    const tie = matchData.split(',');
    this.date = new Date(tie[0]);
    this.season = Number(tie[1]);
    this.round = tie[2];
    this.leg = Number(tie[3]);
    this.home = { name: tie[4], country: tie[21] };
    this.visitor = { name: tie[5], country: tie[22] };
    this.winner = { name: tie[20], country: tie[20] };
  }
}

export class LeagueMatch {
  date: Date;
  season: number;
  division: number;
  home: Club;
  visitor: Club;
  homeGoal: number;
  visitorGoal: number;
  winner: Club;
  isDraw: boolean;

  constructor(matchData: string, league: string) {
    const tie = matchData.split(',');
    this.date = new Date(tie[0]);
    this.season = Number(tie[1]);
    this.division = Number(tie[7]);
    this.home = { name: tie[2], country: league };
    this.visitor = { name: tie[3], country: league };
    this.homeGoal = Number(tie[5]);
    this.visitorGoal = Number(tie[6]);
    this.winner = tie[11] === 'A' ? this.visitor : this.home;
    if (tie[11] === 'D') {
      this.isDraw = true;
    } else {
      this.isDraw = false;
    }
  }
}
