import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the RiflesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RiflesProvider {

  headers: any;
  options: any;

  constructor(public http: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getData(): Observable<any> {
      return this.http.get('assets/data/weapons/rifles.json', this.headers);
  }
}
