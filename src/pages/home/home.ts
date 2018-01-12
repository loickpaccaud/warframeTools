import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestPage } from '../test/test';

import { HomeProvider} from '../../providers/home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  worldState: any;
  events: any;

  constructor(public navCtrl: NavController, public homeProvider: HomeProvider) {
    this.getWorldState();
  }

  getWorldState() {
    this.homeProvider.getworldState()
    .then(data => {
      this.worldState = data;
      this.events = this.worldState.Events;
    });
  }

  openTest() {
  	this.navCtrl.push(TestPage)
  }
}
