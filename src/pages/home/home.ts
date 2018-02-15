import {Component, OnInit} from '@angular/core';
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
export class HomePage implements OnInit{
  items;
  notifications: any[] = [];

  time:number;
  events:Event[]=[];
  alerts:Alert[]=[];
  sorties:Sortie[]=[];
  invasions:Invasion[]=[];

  oldEvents:Event[] = [];
  oldAlerts:Alert[] = [];
  oldSorties:Sortie[] = [];
  oldInvasions:Invasion[] = [];

  constructor(public navCtrl: NavController, public worldStateProvider: WorldStateProvider, private localNotifications: LocalNotifications) {}

  ngOnInit(){
    this.items = [
      {
        title: 'Events',
        page: EventPage,
        param: 'events'
      },
      {
        title: 'Alerts',
        page: AlertPage,
        param: 'alerts'
      },
      {
        title: 'Sorties',
        page: SortiePage,
        param: 'sorties'
      },
      {
        title: 'Invasions',
        page: InvasionPage,
        param: 'invasions'
      }
    ];

    this.worldStateProvider.getAll().subscribe(all => {
      this.time = all.Time;
      this.parseEvents(all.Events);
      this.parseAlerts(all.Alerts);
      this.parseSorties(all.Sorties[0]);
      this.parseInvasions(all.Invasions);

      this.checkNew();
    });
  }

  static parseDate(timeRequest:number, dateEvent:number){
    let date = dateEvent/60;
    if(timeRequest!=null)
      date = (timeRequest - dateEvent)/60; // minutes
    if(date < 60)
      return "["+Math.floor(date)+"m]";
    else {
      date /= 60; // hours
      if(date < 24)
        return "["+Math.floor(date)+"h]";
      else {
        date /= 24; // days
        return "["+Math.floor(date)+"d]";
      }
    }
  }

  parseEvents(events:any){
    if(events.length != 0){
      events.forEach((event) => {
        let eventDate = HomePage.parseDate(this.time,event.Date.$date.$numberLong/1000);
        this.events.push(new Event(event._id.$oid, event.Messages[0].Message, eventDate, event.Prop));
      });
      this.events.reverse();
    }
  }

  parseAlerts(alerts:any){
    if (alerts.length != 0){
      alerts.sort(
        function Comparator(a, b) {
          return (a.Expiry.$date.$numberLong >= b.Expiry.$date.$numberLong) ? 1 : -1;
        });

      alerts.forEach((alert)=>{
        let alertDate = HomePage.parseDate(alert.Expiry.$date.$numberLong/1000, this.time);
        this.alerts.push(new Alert(
          alert._id.$oid,
          alert.MissionInfo.missionType,
          alert.MissionInfo.faction,
          alert.MissionInfo.location,
          alertDate,
          alert.MissionInfo.minEnemyLevel,
          alert.MissionInfo.maxEnemyLevel,
          alert.MissionInfo.missionReward.credits));
      });
    }
  }

  parseSorties(sortie:any){
    if(sortie.length != 0){
      for(let i=0; i<3; i++){
        let sortieDate = HomePage.parseDate(sortie.Expiry.$date.$numberLong/1000, this.time);
        this.sorties.push(new Sortie(
          sortie._id.$oid,
          sortie.Boss,
          sortie.Variants[i].missionType,
          sortie.Variants[i].modifierType,
          sortie.Variants[i].node,
          sortieDate
        ));
      }
    }
  }

  parseInvasions(invasions:any){
    if(invasions.length != 0){
      invasions.forEach((invasion)=>{
        if(invasion.Completed === false) {
          let invasionDate = HomePage.parseDate(this.time, invasion.Activation.$date.$numberLong / 1000);
          this.invasions.push(new Invasion(
            invasion._id.$oid,
            invasion.AttackerMissionInfo.faction,
            invasion.DefenderMissionInfo.faction,
            invasion.Node,
            invasionDate,
            invasion.Count,
            invasion.Goal
          ));
        }
      });
    }
  }

  openNavDetailsPage(page, param) {
    this.navCtrl.push(page, {paramObject: this[param]});
  }

  checkNew(){
    window.setInterval(() => {
      console.log("refreshing...");
      this.oldEvents = Array.from(this.events);
      this.oldAlerts = Array.from(this.alerts);
      this.oldSorties = Array.from(this.sorties);
      this.oldInvasions = Array.from(this.invasions);
      this.events=[];
      this.alerts=[];
      this.sorties=[];
      this.invasions=[];

      this.worldStateProvider.getAll().subscribe(all => {
        this.time = all.Time;
        this.parseEvents(all.Events);
        this.parseAlerts(all.Alerts);
        this.parseSorties(all.Sorties[0]);
        this.parseInvasions(all.Invasions);

        if(this.compareNew(this.oldEvents, this.events).length != 0){
          console.log('New event, check it out !');
          this.localNotifications.schedule({
            id: 1,
            title: 'Event',
            text: 'New event, check it out !',
            led: 'FF0000',
            at: new Date(new Date().getTime() + 1000)
          });
        }

        if(this.compareNew(this.oldAlerts,this.alerts).length != 0){
          console.log('New alert, check it out !');
          this.localNotifications.schedule({
            id: 2,
            title: 'Alert',
            text: 'New alert, check it out !',
            led: 'FF0000',
            at: new Date(new Date().getTime() + 1000),
          });
        }

        if(this.compareNew(this.oldSorties,this.sorties).length != 0){
          console.log('New sortie, check it out !');
          this.localNotifications.schedule({
            id: 3,
            title: 'Sortie',
            text: 'New sortie, check it out !',
            led: 'FF0000',
            at: new Date(new Date().getTime() + 1000)
          });
        }

        if(this.compareNew(this.oldInvasions,this.invasions).length != 0){
          console.log('New invasion, check it out !');
          this.localNotifications.schedule({
            id: 4,
            title: 'Invasion',
            text: 'New invasion, check it out !',
            led: 'FF0000',
            at: new Date(new Date().getTime() + 1000)
          });
        }

      });

    }, 1000);
  }

  compareNew(oldTab: any[], newTab: any[]){
    let result: any[] = [];
    newTab.forEach((element) => {
      let cpt = 0;
      oldTab.forEach((oldE) => {
        if(!element.compare(oldE)) cpt++;
      });
      if(cpt == oldTab.length) {
        result.push(element);
      }
    });
    return result;
  }
}
