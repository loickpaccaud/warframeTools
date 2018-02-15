import { Component } from '@angular/core';
import {Alert} from "../../models/alert";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {
  alerts:Alert[]=[];

  constructor(public navParams: NavParams) {
    this.alerts = navParams.get("paramObject");
  }

}
