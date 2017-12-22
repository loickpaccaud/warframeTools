import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RiflesProvider} from '../../providers/rifles/rifles';

@Component({
  selector: 'page-rifle',
  templateUrl: 'rifle.html'
})
export class TestPage {

  constructor(public navCtrl: NavController, public riflesProvider: RiflesProvider) {

  }
}
