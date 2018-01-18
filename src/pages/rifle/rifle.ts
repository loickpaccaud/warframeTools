import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RiflesProvider} from '../../providers/rifles/rifles';
import {Rifle} from '../../models/rifle';


@Component({
  selector: 'page-rifle',
  templateUrl: 'rifle.html'
})
export class RiflePage {

  jsonResponse:any;
  riflesJSON:any;
  weaponsList:any;

  constructor(public navCtrl: NavController, public riflesProvider: RiflesProvider) {

    this.riflesProvider.getData().subscribe(

          data => {
              this.jsonResponse = JSON.stringify(data);
              this.riflesJSON = JSON.parse(this.jsonResponse);
              this.fillWeapons();
              //console.log(this.weaponsList);
      });
    }

    fillWeapons(){
      var tempList = [];
      this.riflesJSON.Weapons.forEach(function(element) {

        tempList.push(new Rifle(element));
        //console.log(tempList);
    });
    this.weaponsList = tempList;
  }
}
