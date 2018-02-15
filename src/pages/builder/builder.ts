import {Component, OnInit} from '@angular/core';
import {ModsProvider} from "../../providers/mods/mods";
import {Mod} from "../../models/mod";
import {RiflesProvider} from "../../providers/rifles/rifles";
import {Rifle} from "../../models/rifle";

@Component({
  selector: 'page-builder',
  templateUrl: 'builder.html'
})
export class BuilderPage implements OnInit{

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
  triggerCount:number = 1;

  weaponData:Rifle = null;
  modDataTable:Mod[][] = null;

  constructor(public modsProvider: ModsProvider, public riflesProvider: RiflesProvider){}

  ngOnInit(): void {

    // Collect methods from JSON

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

            this.initializeModsLists();
            this.initializeSelectedModsList();

            //this.displayModListsStatus("main thread");
          });
      });

  }

  // Data fillers

  fillMods(){
    this.modsJSON.Mods.forEach(element => {

      let m = new Mod();
      m.setName(element['Name']);
      m.setPolarity(element['Polarity']);
      m.setType(element['Type']);
      m.setStats(element['Stats']);
      m.setMod(element['Mod']);

      this.modsList.push(m);
    });
  }

  fillWeapons() {
    this.riflesJSON.Weapons.forEach(element => {
      this.weaponsList.push(new Rifle(element));
    });
  }

  // Page events

  weaponSelected(selectedValue: any){
    let index = this.indexWeapon;

    if(this.selectedWeapon != null){
      this.clearPolarities();
      this.clearSelectedMods();

      this.initializeModsLists();
      this.initializeSelectedModsList();

      console.log("Selected Weapon : " + this.selectedWeapon['name']);
    }

    this.selectedWeapon = this.weaponsList[index];
    this.initializePolarities();
  }

  modSelected(selectedValue: any, pos:number){
    this.triggerCount = this.triggerCount + 1;

    if(this.triggerCount % 2 == 0){
      let index = this.indexMod;
      this.selectedMod = this.modsList[index];
      console.log("Mod selected : " + this.selectedMod['Name']);

      if(this.selectedMods[pos].getName() != "empty"){
        this.addModToLists(pos, this.selectedMods[pos]);
      }

      this.modDataTable[pos] = this.modsList;

      this.removeModFromLists(pos,index, this.modsList);
      this.selectedMods[pos] = this.selectedMod;

      this.displayModListsStatus("after modification");
      this.displaySelectedModsStatus("after modification");

      this.updateCount();

      //Add calculation methods
    }
  }

  // Init methods

  initializePolarities(){
    console.log("Init polarities");
    let i;
    if(this.selectedWeapon != null){
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
      console.log("Polarity list : " + this.polarityList);
    }
  }

  initializeSelectedModsList(){
    console.log("Init selected mods lists");
    for(let i=0; i<8; i++){
      let m = new Mod();
      m.setName("empty");
      this.selectedMods.push(m);
    }
  }

  private initializeModsLists() {
    console.log("Init mods lists");
    this.modDataTable = [];
    var tempList = [];

    for(let j=0; j<this.modsList.length-1; j++){
      tempList.push(this.modsList[j]);
    }

    for(let i=0; i<8; i++){
      this.modDataTable.push(tempList);
    }
  }

  clearWeapon(){
    this.weaponData = null;

    this.clearPolarities();
    this.clearSelectedMods();
    this.initializeModsLists();
  }

  clearSelectedMods(){
    this.selectedMods = [];
  }

  private clearPolarities() {
    this.polarityList = [];
  }

  // Score calculation methods

  updateCount(){
    console.log("Counting mod score");
    let value = 60;

    for(let i=0; i<8; i++){
      let temp = this.selectedMods[i];

      if(temp['Name'] != "empty"){
        value = value - temp['Mod'][temp['Mod'].length-1]['Cost'];
      }
    }
    this.count = value;
    console.log("Count value :" + this.count);
  }

  // Select options update

  removeModFromLists(selectNumber:number, selectMod:number, mods:Mod[]){
    console.log("Removing new mod from lists");
    var listTemp = [];

    for(let j=0; j<this.modsList.length-1; j++){
      if(j != selectMod){
        listTemp.push(this.modsList[j]);
      }
    }

    console.log("List temp size : " + listTemp.length);
    console.log("DataTable size : " + this.modDataTable.length);

    /*for(let i=0; i<8; i++){
      if(i!= selectNumber){
        this.modDataTable[i] = listTemp;
      }
    }*/
  }

  addModToLists(pos: number, mod: Mod) {
    console.log("Re adding previous mod to lists");

    for(let i=0; i<8; i++){
      var listTemp = [];
      if(i != pos){
        for(let j=0; j<this.modDataTable[i].length-1; j++){
          listTemp.push(this.modDataTable[i][j]);
        }
        listTemp.push(mod);
        this.modDataTable[i] = listTemp;
      }
      //console.log("Mods lists :" + this.modDataTable.length);
    }
  }

  // Tests

  displayModListsStatus(message:String){
    for(let i=0; i<8; i++){
      console.log("Length of list " + i + " : "+ this.modDataTable[i].length + "  | at : " + message);
      for(var j=0; j<this.modDataTable[i].length-1; j++){
        console.log("List " + i + " : " + this.modDataTable[i][j]);
      }
    }
  }

  displaySelectedModsStatus(message:String) {
    console.log("Length of selectedMods : " + this.selectedMods.length + "  | at : " + message);
    console.log("selectedMods : " + this.selectedMods);
  }
}
