import { Component } from '@angular/core';
import {Invasion} from "../../models/invasion";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-invasion',
  templateUrl: 'invasion.html'
})
export class InvasionPage {
  invasions:Invasion[]=[];

  constructor(public navParams: NavParams) {
    this.invasions = navParams.get("paramObject");
  }

}
