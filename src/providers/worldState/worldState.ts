import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Event} from "../../models/event";
import {Alert} from "../../models/alert";
import {Sortie} from "../../models/sortie";
import {Invasion} from "../../models/invasion";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WorldStateProvider {
  apiUrl = "https://warframetools.herokuapp.com";

  constructor(public http: Http) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl).map(response => response.json());
  }

  getTime(): Observable<number> {
    return this.http.get(this.apiUrl).map(response => response.json().Time as number);
  }

  getEvents(): Observable<Event[]> {
    return this.http.get(this.apiUrl).map(response => response.json().Events as Event[]);
  }

  getAlerts(): Observable<Alert[]> {
    return this.http.get(this.apiUrl).map(response => response.json().Alerts as Alert[]);
  }

  getSorties(): Observable<Sortie[]> {
    return this.http.get(this.apiUrl).map(response => response.json().Sorties[0] as Sortie[]);
  }

  getInvasions(): Observable<Invasion[]> {
    return this.http.get(this.apiUrl).map(response => response.json().Invasions as Invasion[]);
  }
}
