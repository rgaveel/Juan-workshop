import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styles: [
     '.team-list {background: #80addb56; padding: 0 10px}'
  ],
  providers:  [LoggerService]
})
export class TeamListComponent {
  newName: string;
  teams: string[] = [];
  selectedTeam: string;

  constructor(public logger: LoggerService) {
  }

  addTeam() {
    if (this.newName.trim() && this.teams.length<20) {
      this.teams.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  selectTeam(team: string){
    console.dir(team);
    this.selectedTeam = team;
  }

  removeTeam() {
    this.teams.splice(this.teams.indexOf(this.selectedTeam),1);
    this.logger.tick();
  }
}