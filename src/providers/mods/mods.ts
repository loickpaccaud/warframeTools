import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/Rx';

/*
  Generated class for the ModsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ModsProvider {

  headers: any;
  options: any;

  constructor(public http: HttpClient) {
    console.log('Hello ModsProvider Provider');
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getData(): Observable<any> {
    return this.http.get('assets/data/mods/rifles.json', this.headers);
  }
}
