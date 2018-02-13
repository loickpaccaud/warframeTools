import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventPage } from '../event/event';
import { AlertPage } from '../alert/alert';
import { SortiePage } from '../sortie/sortie';
import { InvasionPage } from '../invasion/invasion';
import { VoidTraderPage } from '../voidTrader/voidTrader';

import { worldStateProvider} from '../../providers/worldState/worldState';

import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items;
  notifications: any[] = [];

  constructor(public navCtrl: NavController, public homeProvider: worldStateProvider, public localNotifications: LocalNotifications) {
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

    //this.checkNewEvent();

  }

  openNavDetailsPage(page) {
    this.navCtrl.push(page);
  }

  checkNewEvent(){
    //TODO check new event, alert, ....
    this.localNotifications.schedule({
      title: "test",
      text: "test",
      led: 'FF0000',
      at: new Date(new Date().getTime()+1000)
    });

    console.log("event checked");
    //setInterval(this.checkNewEvent(self),10000);
  }

  /*cordova.plugins.backgroundMode.onactivate = function () {
    setTimeout(function () {
      // Modify the currently displayed notification
      cordova.plugins.backgroundMode.configure({
        text:'Running in background for more than 5s now.'
      });
    }, 5000);
  }*/


}
