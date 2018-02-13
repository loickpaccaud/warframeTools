import { Component } from '@angular/core';
import { worldStateProvider} from '../../providers/worldState/worldState';
import { Event } from '../../models/event';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  events:Event[]=[];

  constructor(public worldStateProvider: worldStateProvider) {
    this.events = this.worldStateProvider.events;
  }


}
