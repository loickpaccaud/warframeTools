import { Component } from '@angular/core';
import {worldStateProvider} from "../../providers/worldState/worldState";
import {Alert} from "../../models/alert";

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {
  alerts:Alert[]=[];

  constructor(public worldStateProvider: worldStateProvider) {
    this.alerts = this.worldStateProvider.alerts;
  }

}
