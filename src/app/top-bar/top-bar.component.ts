import { Component, Input, OnInit } from '@angular/core';

import { TeamListComponent } from '../team-list/team-list.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() newName: string;

  constructor() { }

  ngOnInit() {
  }

  addTeam(newName: string) {
    TeamListComponent.addTeam([newName])
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/