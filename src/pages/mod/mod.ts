import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Mod} from "../../models/mod";


@Component({
  selector: 'page-mod',
  templateUrl: 'mod.html'
})

export class ModPage {
  mod: Mod;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mod = navParams.get("modObject");
  }

}
