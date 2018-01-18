import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventPage } from '../event/event';
import { AlertPage } from '../alert/alert';
import { SortiePage } from '../sortie/sortie';
import { InvasionPage } from '../invasion/invasion';
import { VoidTraderPage } from '../voidTrader/voidTrader';

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
        'page': 'AlertPage'
      },
      {
        'title': 'Sorties',
        'page': 'SortiePage'
      },
      {
        'title': 'Invasions',
        'page': 'InvasionPage'
      },
      {
        'title': 'Void trader',
        'page': 'VoidTraderPage'
      }
    ];
  }

  openNavDetailsPage(page:string) {
    switch (page) {
      case "EventPage":
        this.navCtrl.push(EventPage);
        break;

      case "AlertPage":
        this.navCtrl.push(AlertPage);
        break;

      case "SortiePage":
        this.navCtrl.push(SortiePage);
        break;

      case "InvasionPage":
        this.navCtrl.push(InvasionPage);
        break;

      case "VoidTraderPage":
        this.navCtrl.push(VoidTraderPage);
        break;

      default:
        this.navCtrl.push(HomePage);
        break;
    }
  }
}
