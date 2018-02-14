import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Rifle} from "../../models/rifle";


@Component({
  selector: 'page-rifle',
  templateUrl: 'rifle.html'
})

export class RiflePage {
  rifle: Rifle;
  polarities: String[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rifle = navParams.get("rifleObject");
    let i;
    for(i=0 ; i<this.rifle.madurai ; i++) this.polarities.push("madurai");
    for(i=0 ; i<this.rifle.naramon ; i++) this.polarities.push("naramon");
    for(i=0 ; i<this.rifle.vazarin ; i++) this.polarities.push("vazarin");
    for(i=0 ; i<this.rifle.zenurik ; i++) this.polarities.push("zenurik");
    for(i=0 ; i<this.rifle.penjaga ; i++) this.polarities.push("penjaga");
    for(i=0 ; i<this.rifle.unairu ; i++) this.polarities.push("unairu");
  }

}
