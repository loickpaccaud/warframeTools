import { Component } from '@angular/core';
import {Invasion} from "../../models/invasion";
import {WorldStateProvider} from "../../providers/worldState/worldState";

@Component({
  selector: 'page-invasion',
  templateUrl: 'invasion.html'
})
export class InvasionPage {
  invasions:Invasion[]=[];

  constructor(public worldStateProvider: WorldStateProvider) {
    this.invasions = this.worldStateProvider.invasions;
  }

}
