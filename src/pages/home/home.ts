import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventPage } from '../event/event';
import { AlertPage } from '../alert/alert';
import { SortiePage } from '../sortie/sortie';
import { InvasionPage } from '../invasion/invasion';

import { WorldStateProvider} from '../../providers/worldState/worldState';

import { LocalNotifications } from '@ionic-native/local-notifications';
import {Event} from "../../models/event";
import {Alert} from "../../models/alert";
import {Sortie} from "../../models/sortie";
import {Invasion} from "../../models/invasion";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items;
  notifications: any[] = [];
  oldEvents:Event[] = [];
  oldAlerts:Alert[] = [];
  oldSorties:Sortie[] = [];
  oldInvasions:Invasion[] = [];

  constructor(public navCtrl: NavController, public worldStateProvider: WorldStateProvider, private localNotifications: LocalNotifications) {
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
      }
    ];

    this.checkNewEvent(this);

  }

  openNavDetailsPage(page) {
    this.navCtrl.push(page);
  }

  checkNewEvent(self: any) {
    window.setInterval(function(){
      if(self.worldStateProvider != null) {

        self.oldEvents = self.worldStateProvider.events;
        self.oldAlerts = self.worldStateProvider.alerts;
        self.oldSorties = self.worldStateProvider.sorties;
        self.oldInvasions = self.worldStateProvider.invasions;

        self.worldStateProvider.getworldState();

        if(self.compareNewEvent(self.oldEvents,self.worldStateProvider.events).length != 0){

          console.log('New event, check it out !');
          self.localNotifications.schedule({
            id: 1,
            title: 'Event',
            text: 'New event, check it out !',
            led: 'FF0000',
            at: new Date(new Date().getTime() + 1000)
          });

        }
        if(self.compareNewEvent(self.oldAlerts,self.worldStateProvider.alerts).length != 0){

          console.log('New alert, check it out !');
          self.localNotifications.schedule({
            id: 1,
            title: 'Alert',
            text: 'New alert, check it out !',
            led: 'FF0000',
            at: new Date(new Date().getTime() + 1000)
          });

        }
        if(self.compareNewEvent(self.oldSorties,self.worldStateProvider.sorties).length != 0){

          console.log('New sortie, check it out !');
          self.localNotifications.schedule({
            id: 1,
            title: 'Sortie',
            text: 'New sortie, check it out !',
            led: 'FF0000',
            at: new Date(new Date().getTime() + 1000)
          });

        }
        if(self.compareNewEvent(self.oldInvasions,self.worldStateProvider.invasions).length != 0){

          console.log('New invasion, check it out !');
          self.localNotifications.schedule({
            id: 1,
            title: 'Invasion',
            text: 'New invasion, check it out !',
            led: 'FF0000',
            at: new Date(new Date().getTime() + 1000)
          });

        }

      }
    }, 10000);
  }

  compareNewEvent(oldTab: any[], newTab: any[]){
    let result: any[] = [];
    newTab.forEach(function(element){
      if(!oldTab.indexOf(element))
        result.push(element);
    });
    return result;
  }
}
