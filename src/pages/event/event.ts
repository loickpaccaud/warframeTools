import {Component} from '@angular/core';
import { Event } from '../../models/event';
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage{
  events:Event[]=[];

  constructor(public navParams: NavParams) {
    this.events = navParams.get("paramObject");
  }
}
