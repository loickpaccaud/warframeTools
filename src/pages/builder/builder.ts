import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ModsProvider} from "../../providers/mods/mods";
import {Mod} from "../../models/mod";
import {RiflesProvider} from "../../providers/rifles/rifles";
import {Rifle} from "../../models/rifle";

@Component({
  selector: 'page-builder',
  templateUrl: 'builder.html'
})
export class BuilderPage {

  jsonResponse:any;
  modsJSON:any;
  riflesJSON:any;
  modsList:Mod[] = [];
  weaponsList:Rifle[] = [];
  indexWeapon:number = 0;
  indexMod:number = 0;
  selectedWeapon:any;
  selectedMod:any;
  polarityList:String[] = [];
  count:number=60;
  previousMod:Mod;

  constructor(public navCtrl: NavController, public modsProvider: ModsProvider, public riflesProvider: RiflesProvider) {

    this.modsProvider.getData().subscribe(

      data => {
        this.jsonResponse = JSON.stringify(data);
        this.modsJSON = JSON.parse(this.jsonResponse);
        this.fillMods();

        this.riflesProvider.getData().subscribe(

          data => {
            this.jsonResponse = JSON.stringify(data);
            this.riflesJSON = JSON.parse(this.jsonResponse);
            this.fillWeapons();
          });
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
      //console.log(m);
    });
  }

  fillWeapons() {
    this.riflesJSON.Weapons.forEach(element => {
      this.weaponsList.push(new Rifle(element));
    });
    //console.log(this.weaponsList);
  }

  weaponSelected(selectedValue: any){
    let index = this.indexWeapon;
    this.selectedWeapon = this.weaponsList[index];
    console.log(this.selectedWeapon);
    this.initializePolarities();
  }

  modSelected(selectedValue: any){
    let index = this.indexMod;
    this.selectedMod = this.modsList[index];
    console.log(this.selectedMod);

    this.updateCount();
    this.previousMod = this.selectedMod;

    //Add calculation methods
  }

  initializePolarities(){

    let i;
    this.polarityList = [];

    if(this.selectedWeapon.getMadurai() != 0){
      for(i = 0; i<this.selectedWeapon.getMadurai(); i++){
        this.polarityList.push("Madurai");
      }
    }
    if(this.selectedWeapon.getNaramon() != 0){
      for(i = 0; i<this.selectedWeapon.getNaramon(); i++){
        this.polarityList.push("Naramon");
      }
    }
    if(this.selectedWeapon.getVazarin() != 0){
      for(i = 0; i<this.selectedWeapon.getVazarin(); i++){
        this.polarityList.push("Vazarin");
      }
    }

    console.log(this.polarityList);
  }

  updateCount(){
    if(this.previousMod != null){
      this.count = this.count + this.previousMod['Mod'][this.previousMod['Mod'].length-1]['Cost'];
    }
    if(this.selectedMod != null){
      this.count = this.count - this.selectedMod['Mod'][this.selectedMod['Mod'].length-1]['Cost'];

    }
  }
}
