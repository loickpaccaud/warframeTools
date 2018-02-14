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
  selectedMods:Mod[] = [];

  weaponData:Rifle = null;
  modDataTable:[][] = null;

  constructor(public navCtrl: NavController, public modsProvider: ModsProvider, public riflesProvider: RiflesProvider) {
    this.collectData();
    this.initializeModsLists();
  }

  collectData(){
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
  }

  weaponSelected(selectedValue: any){
    let index = this.indexWeapon;
    this.selectedWeapon = this.weaponsList[index];

    console.log("Selected Weapon : " + this.selectedWeapon);

    this.initializePolarities();
    this.initializeSelectedModsList();
  }

  modSelected(selectedValue: any, pos:number){
    let index = this.indexMod;
    this.selectedMod = this.modsList[index];
    console.log("Mod selected : " + this.selectedMod);

    if(this.selectedMods[pos].getName() != "empty"){
      this.addModToLists(pos, this.selectedMods[pos]);
    }

    this.selectedMods[pos] = this.selectedMod;
    this.removeModFromLists(pos,index);

    this.updateCount();

    //Add calculation methods
  }

  initializePolarities(){

    console.log("Init polarities");

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
  }


  initializeSelectedModsList(){
    console.log("Init mods lists");
    for(var i=0; i<8; i++){
      var m = new Mod();
      m.setName("empty");
      this.selectedMods.push(m);
    }
  }

  private initializeModsLists() {
    this.modDataTable = [];
    for(var i=0; i<8; i++){
      this.modDataTable.push(this.modsList);
    }
  }

  resetWeapon(){
    this.weaponData = null;

    console.log
    this.initializeModsLists();
    this.clearSelectedMods();
    this.clearPolarities();
  }

  clearSelectedMods(){
    this.selectedMods = [];
  }

  private clearPolarities() {
    this.polarityList = [];
  }

  updateCount(){
    console.log("Counting mod score");
    var value = 60;

    for(var i=0; i<8; i++){
      var temp = this.selectedMods[i];

      if(temp['Name'] != "empty"){
        value = value - temp['Mod'][temp['Mod'].length-1]['Cost'];
      }
    }
    this.count = value;
    console.log("Count value :" + this.count);
  }

  removeModFromLists(selectNumber:number, selectMod:number){
    console.log("Removing new mod from lists");
    var temp = [];
    for(var i=0; i<8; i++){
      if(i!= selectNumber){
        temp = this.modDataTable[i].splice(selectMod, 1);
        this.modDataTable[i] = temp;
      }
    }
    //console.log("Mods Lists :" + this.modDataTable.toString());
  }

  addModToLists(pos: number, mod: Mod) {
    console.log("Re adding previous mod to lists");
    for(var i=0; i<8; i++){
      this.modDataTable[i].push(mod);
    }
    //console.log("Mods lists :" + this.modDataTable.toString());
  }
}
