import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
})
export class FixtureComponent implements OnChanges {
  @Input() teams: string[];

  ngOnChanges(teams: {[propKey: string]: SimpleChange}) {
    
  }

  constructor() { }

  ngOnInit() {
  }

}