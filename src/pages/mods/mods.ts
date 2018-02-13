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
    this.modsJSON.Mods.forEach(element => {

      var m = new Mod();
      m.setName(element['Name']);
      m.setPolarity(element['Polarity']);
      m.setType(element['Type']);
      m.setStats(element['Stats']);
      m.setMod(element['Mod']);

      this.modsList.push(m);
      console.log(m);
    });
  }

  openModPage(mod: Mod){
    this.navCtrl.push(ModPage, {modObject: mod});
  }
}
