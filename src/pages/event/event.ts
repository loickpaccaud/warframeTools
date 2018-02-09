import { Component } from '@angular/core';
import { HomeProvider} from '../../providers/home/home';
import { Event } from '../../models/event';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  worldState: any;
  eventDate:number;
  timestamp:number;
  events=[];

  constructor(public homeProvider: HomeProvider) {
    this.getWorldState();
  }

  getWorldState() {
    this.homeProvider.getworldState()
    .then(data => {
      this.worldState = data;
      this.timestamp = this.worldState.Time;
      this.parseEvents(this.worldState.Events);
    });
  }

  parseEvents(events:any){
    events.forEach((event) => {
      this.eventDate = event.Date.$date.$numberLong/1000;
      //console.log(this.timestamp - this.eventDate);
      this.eventDate = (this.timestamp - this.eventDate)/60; // minutes
      if(this.eventDate < 60) this.events.push(new Event(event.Messages[0].Message, "["+Math.floor(this.eventDate)+"m]", event.Prop));
      else {
          this.eventDate /= 60; // hours
          if(this.eventDate < 24) this.events.push(new Event(event.Messages[0].Message, "["+Math.floor(this.eventDate)+"h]", event.Prop));
          else {
              this.eventDate /= 24; // days
              this.events.push(new Event(event.Messages[0].Message, "["+Math.floor(this.eventDate)+"d]", event.Prop));
          }
      }
   });
    this.events.reverse();
  }
}
