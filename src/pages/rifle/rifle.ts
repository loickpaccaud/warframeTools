import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Rifle} from "../../models/rifle";


@Component({
  selector: 'page-rifle',
  templateUrl: 'rifle.html'
})

export class RiflePage {
  rifle: Rifle;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rifle = navParams.get("rifleObject");
    console.log(this.rifle.getName());
  }

}
