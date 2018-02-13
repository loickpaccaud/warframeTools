import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ModsProvider} from "../../providers/mods/mods";
import {Mod} from "../../models/mod";
import {ModPage} from "../mod/mod";

@Component({
  selector: 'page-mods',
  templateUrl: 'mods.html'
})
export class ModsPage {

  jsonResponse:any;
  modsJSON:any;
  modsList:Mod[] = [];

  constructor(public navCtrl: NavController, public modsProvider: ModsProvider) {

    this.modsProvider.getData().subscribe(

      data => {
        this.jsonResponse = JSON.stringify(data);
        this.modsJSON = JSON.parse(this.jsonResponse);
        console.log("Parsed JSON : " + this.modsJSON['Name']);
        this.fillMods();
      });
  }

  fillMods(){
    //this.modsJSON.forEach(element => {

      var m = new Mod();
      m.setName(this.modsJSON['Name']);
      m.setPolarity(this.modsJSON['Polarity']);
      m.setType(this.modsJSON['Type']);
      m.setStats(this.modsJSON['Stats']);
      m.setMod(this.modsJSON['Mod']);

      this.modsList.push(m);
      console.log(m);
    //});
  }

  openModPage(mod: Mod){
    this.navCtrl.push(ModPage, {modObject: mod});
  }
}
