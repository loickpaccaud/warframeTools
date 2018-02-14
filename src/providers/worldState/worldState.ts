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
      this.parseSorties(this.worldState.Sorties[0]);
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
        return (a.Expiry.$date.$numberLong >= b.Expiry.$date.$numberLong) ? 1 : -1;
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

  parseSorties(sortie:any){
    for(let i=0; i<3; i++){
      let sortieDate = this.parseDate(sortie.Expiry.$date.$numberLong/1000, this.worldState.Time);
      this.sorties.push(new Sortie(
        sortie.Boss,
        sortie.Variants[i].missionType,
        sortie.Variants[i].modifierType,
        sortie.Variants[i].node,
        sortieDate
      ));
    }
  }

  parseInvasions(invasions:any){
    invasions.forEach((invasion)=>{
      if(invasion.Completed === false) {
        let invasionDate = this.parseDate(this.worldState.Time, invasion.Activation.$date.$numberLong / 1000);
        this.invasions.push(new Invasion(
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
