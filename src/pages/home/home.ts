import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventPage } from '../event/event';
import { AlertPage } from '../alert/alert';
import { SortiePage } from '../sortie/sortie';
import { InvasionPage } from '../invasion/invasion';
import { VoidTraderPage } from '../voidTrader/voidTrader';

import { HomeProvider} from '../../providers/home/home';

import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items;
  notifications: any[] = [];

  constructor(public navCtrl: NavController, public homeProvider: HomeProvider, public localNotifications: LocalNotifications) {
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

    this.localNotifications.schedule({
      id: 1,
      title: 'Event',
      text: 'this is a notification bayou',
      led: 'FF0000',
      at: new Date(new Date().getTime() + 5 * 1000)
    });

  }

  openNavDetailsPage(page) {
    this.navCtrl.push(page);
  }
}
