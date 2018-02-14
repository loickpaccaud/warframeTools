import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Event} from "../../models/event";
import {Alert} from "../../models/alert";
import {Sortie} from "../../models/sortie";
import {Invasion} from "../../models/invasion";

@Injectable()
export class WorldStateProvider {
  apiUrl = "https://warframetools.herokuapp.com";
  worldState: any;
  public events:Event[]=[];
  public alerts:Alert[]=[];
  public sorties:Sortie[]=[];
  public invasions:Invasion[]=[];

  constructor(public http: HttpClient) {
    this.getworldState();
  }

  getworldState() {
    this.events.length = 0;
    this.alerts.length = 0;
    this.sorties.length = 0;
    this.invasions.length = 0;

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
      })

    alerts.forEach((alert)=>{
      let alertDate = this.parseDate(null,(alert.Expiry.$date.$numberLong - alert.Activation.$date.$numberLong)/1000);
      this.alerts.push(new Alert(
        alert.MissionInfo.missionType,
        alert.MissionInfo.faction,
        alert.MissionInfo.location,
        alertDate,
        alert.MissionInfo.minEnemyLevel,
        alert.MissionInfo.maxEnemyLevel));
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
