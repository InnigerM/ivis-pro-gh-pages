import { Club } from "./club-data";

export class Match {
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
