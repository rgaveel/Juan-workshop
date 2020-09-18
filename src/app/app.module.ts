import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TeamListComponent } from './team-list/team-list.component';
import { FixtureComponent } from './fixture/fixture.component';
import { LoggerService } from './team-list/logger.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: TeamListComponent },
      { path: '', component: FixtureComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TeamListComponent,
    FixtureComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [LoggerService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/