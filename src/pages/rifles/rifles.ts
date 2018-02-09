import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RiflesProvider} from '../../providers/rifles/rifles';
import {Rifle} from '../../models/rifle';
import {RiflePage} from "../rifle/rifle";


@Component({
  selector: 'page-rifles',
  templateUrl: 'rifles.html'
})
export class RiflesPage {

  jsonResponse:any;
  riflesJSON:any;
  weaponsList:Rifle[] = [];

  constructor(public navCtrl: NavController, public riflesProvider: RiflesProvider) {

    this.riflesProvider.getData().subscribe(

      data => {
          this.jsonResponse = JSON.stringify(data);
          this.riflesJSON = JSON.parse(this.jsonResponse);
          this.fillWeapons();
      });
    }

    fillWeapons(){
      this.riflesJSON.Weapons.forEach(element => {
        this.weaponsList.push(new Rifle(element));
    });
  }

  openRiflePage(rifle: Rifle){
      this.navCtrl.push(RiflePage, {rifleObject: rifle});
  }
}
