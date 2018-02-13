import { Component } from '@angular/core';
import { WorldStateProvider} from '../../providers/worldState/worldState';
import { Event } from '../../models/event';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  events:Event[]=[];

  constructor(public worldStateProvider: WorldStateProvider) {
    this.events = this.worldStateProvider.events;
  }


}
