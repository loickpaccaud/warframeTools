import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Event} from "../../models/event";
import {Alert} from "../../models/alert";
import {Sortie} from "../../models/sortie";
import {Invasion} from "../../models/invasion";
import {voidTrader} from "../../models/voidTrader";

@Injectable()
export class WorldStateProvider {
  apiUrl = "https://warframetools.herokuapp.com";
  worldState: any;
  public events:Event[]=[];
  public alerts:Alert[]=[];
  public sorties:Sortie[]=[];
  public invasions:Invasion[]=[];
  public voidTrader:voidTrader[]=[];

  constructor(public http: HttpClient) {
    this.getworldState();
  }

  getworldState() {
    this.events = [];
    this.alerts = [];
    this.sorties = [];
    this.invasions = [];
    this.voidTrader = [];

    new Promise(resolve => {
      this.http.get(this.apiUrl)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }).then(data => {
      this.worldState = data;
      this.parseEvents(this.worldState.Events);
      this.parseAlerts(this.worldState.Alerts);
      this.parseSorties(this.worldState.Sorties);
      this.parseInvasions(this.worldState.Invasions);
      this.parseVoidTrader(this.worldState.VoidTraders);
    });
  }

  parseEvents(events:any){
    events.forEach((event) => {
      let eventDate = this.parseDate(this.worldState.Time,event.Date.$date.$numberLong/1000);
      this.events.push(new Event(event.Messages[0].Message, eventDate, event.Prop));
    });
    this.events.reverse();
  }

  parseAlerts(alerts:any){

    alerts.sort(
      function Comparator(a, b) {
        return ((a.Expiry.$date.$numberLong - a.Activation.$date.$numberLong) >= (b.Expiry.$date.$numberLong - b.Activation.$date.$numberLong)) ? 1 : -1;
      });

    alerts.forEach((alert)=>{
      let alertDate = this.parseDate(alert.Expiry.$date.$numberLong/1000, this.worldState.Time);
      this.alerts.push(new Alert(
        alert.MissionInfo.missionType,
        alert.MissionInfo.faction,
        alert.MissionInfo.location,
        alertDate,
        alert.MissionInfo.minEnemyLevel,
        alert.MissionInfo.maxEnemyLevel,
        alert.MissionInfo.missionReward.credits));
    });
  }

  parseSorties(sorties:any){
    sorties.forEach((sortie)=>{

    });
    this.sorties.reverse();
  }

  parseInvasions(invasions:any){
    invasions.forEach((invasion)=>{

    });
    this.invasions.reverse();
  }

  parseVoidTrader(voidTrader:any){

  }

  parseDate(timeRequest:number, dateEvent:number){
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
}
