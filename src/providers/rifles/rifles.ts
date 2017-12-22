import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rifle } from '../../models/rifle';

/*
  Generated class for the RiflesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RiflesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RiflesProvider Provider');
  }

}
