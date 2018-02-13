import { Component } from '@angular/core';
import {WorldStateProvider} from "../../providers/worldState/worldState";
import {Alert} from "../../models/alert";

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {
  alerts:Alert[]=[];

  constructor(public worldStateProvider: WorldStateProvider) {
    this.alerts = this.worldStateProvider.alerts;
  }

}
