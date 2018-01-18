import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestPage } from '../test/test';
import { EventPage } from '../event/event';

import { HomeProvider} from '../../providers/home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  worldState: any;
  events: any;
  items;

  constructor(public navCtrl: NavController, public homeProvider: HomeProvider) {
    this.items = [
      {
        'title': 'Events',
        'page': 'EventPage'
      },
      {
        'title': 'Alerts',
        'page': 'TestPage'
      },
      {
        'title': 'Sorties',
        'page': 'TestPage'
      },
      {
        'title': 'Invasions',
        'page': 'TestPage'
      },
      {
        'title': 'Void trader',
        'page': 'TestPage'
      }
    ];
  }

  openNavDetailsPage(page:string) {
    switch (page) {
      case "EventPage":
        this.navCtrl.push(EventPage);
        break;
      
      default:
        this.navCtrl.push(TestPage);
        break;
    }
  }
}
