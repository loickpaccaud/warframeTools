import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeProvider} from '../../providers/home/home';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
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
}
