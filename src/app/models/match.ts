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

export class EnglandMatch {
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
    if (league === 'england') {
      this.constructEngland(tie);
    } else if (league === 'germany') {
      this.constructGermany(tie);
    } else if (league === 'italy') {
      this.constructItaly(tie);
    } else if (league === 'spain') {
      this.constructSpain(tie);
    }
  }

  private constructEngland(tie: string[]) {
    this.date = new Date(tie[0]);
    this.season = Number(tie[1]);
    this.division = Number(tie[7]);
    this.home = { name: tie[2], country: 'England' };
    this.visitor = { name: tie[3], country: 'England' };
    this.homeGoal = Number(tie[5]);
    this.visitorGoal = Number(tie[6]);
    this.winner = tie[11] === 'A' ? this.visitor : this.home;
    if (tie[11] === 'D') {
      this.isDraw = true;
    } else {
      this.isDraw = false;
    }
  }

  private constructGermany(tie: string[]) {
    this.date = new Date(tie[0]);
    this.season = Number(tie[1]);
    this.division = Number(tie[8]);
    this.home = { name: tie[2], country: 'Germany' };
    this.visitor = { name: tie[3], country: 'Germany' };
    this.homeGoal = Number(tie[5]);
    this.visitorGoal = Number(tie[6]);
    this.winner = this.homeGoal > this.visitorGoal ? this.home : this.visitor;
    if (this.homeGoal === this.visitorGoal) {
      this.isDraw = true;
    } else {
      this.isDraw = false;
    }
  }

  private constructItaly(tie: string[]) {
    this.date = new Date(tie[0]);
    this.season = Number(tie[1]);
    this.division = Number(tie[7]);
    this.home = { name: tie[2], country: 'Italy' };
    this.visitor = { name: tie[3], country: 'Italy' };
    this.homeGoal = Number(tie[5]);
    this.visitorGoal = Number(tie[6]);
    this.winner = this.homeGoal > this.visitorGoal ? this.home : this.visitor;
    if (this.homeGoal === this.visitorGoal) {
      this.isDraw = true;
    } else {
      this.isDraw = false;
    }
  }

  private constructSpain(tie: string[]) {
    this.date = new Date(tie[0]);
    this.season = Number(tie[1]);
    this.division = Number(tie[8]);
    this.home = { name: tie[2], country: 'Italy' };
    this.visitor = { name: tie[3], country: 'Italy' };
    this.homeGoal = Number(tie[6]);
    this.visitorGoal = Number(tie[7]);
    this.winner = this.homeGoal > this.visitorGoal ? this.home : this.visitor;
    if (this.homeGoal === this.visitorGoal) {
      this.isDraw = true;
    } else {
      this.isDraw = false;
    }
  }
}
