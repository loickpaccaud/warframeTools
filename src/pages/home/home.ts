import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventPage } from '../event/event';
import { AlertPage } from '../alert/alert';
import { SortiePage } from '../sortie/sortie';
import { InvasionPage } from '../invasion/invasion';
import { VoidTraderPage } from '../voidTrader/voidTrader';

import { WorldStateProvider} from '../../providers/worldState/worldState';

import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items;
  notifications: any[] = [];

  constructor(public navCtrl: NavController, public worldStateProvider: WorldStateProvider, public localNotifications: LocalNotifications) {
    this.items = [
      {
        title: 'Events',
        page: EventPage
      },
      {
        title: 'Alerts',
        page: AlertPage
      },
      {
        title: 'Sorties',
        page: SortiePage
      },
      {
        title: 'Invasions',
        page: InvasionPage
      },
      {
        title: 'Void trader',
        page: VoidTraderPage
      }
    ];

    this.checkNewEvent();

  }

  openNavDetailsPage(page) {
    this.navCtrl.push(page);
  }

  checkNewEvent() {
    console.log("event checked");


  }
}
