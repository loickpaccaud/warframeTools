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

  weaponData:Rifle = null;
  availableMods:Mod[] = null;
  selectedMods:Mod[] = [];

  counter:number = 0;
  displayStats:boolean = false;

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

            this.initializeSelectedModsList();
            this.initializeAvailableMods();

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
    this.displayStats = true;
    let index = this.indexWeapon;

    if(this.selectedWeapon != null){
      this.clearPolarities();
      this.clearSelectedMods();

      this.initializeSelectedModsList();
      this.initializeAvailableMods();

      console.log("Selected Weapon : " + this.selectedWeapon['name']);
    }

    this.selectedWeapon = this.weaponsList[index];
    this.initializePolarities();
    this.initializeAvailableMods();
  }

  modSelected(selectedValue: any, pos:number){

    this.counter++;

    console.log("----------------- Call " + this.counter + "------------------------")

    let index = this.indexMod;
    this.selectedMod = this.modsList[index];

    console.log("Mod selected : " + this.selectedMod['Name']);

    this.displaySelectedModsStatus("start");
    //this.displayAvailableModsStatus("start");

    //Re adding mod to available list

    if(this.selectedMods[pos].getName() != "empty"){
      console.log("Re adding mod : " + this.selectedMods[pos]['Name']);
      this.availableMods.push(this.selectedMods[pos]);
    }

    this.selectedMods[pos] = this.selectedMod;
    this.displaySelectedModsStatus("after assign");
    //this.displayAvailableModsStatus("after assign");

    //Removing mod from available list

    console.log("Removing mod : " + this.selectedMod['Name']);
    var tempList = this.modsList;
    tempList.splice(index,1);
    this.availableMods = tempList;

    this.displaySelectedModsStatus("update");
    this.displayAvailableModsStatus("update");

    //Updating mod points

    this.updateCount();
    //Add calculation methods
  }

  resetWeapon(){
    this.clearWeapon();
    this.clearPolarities();
    this.clearSelectedMods();
    this.initializeAvailableMods();
    this.clearScore();
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

  private initializeAvailableMods() {
    this.availableMods = this.modsList;
  }

  clearWeapon(){
    this.weaponData = null;
    this.displayStats = false;
  }

  clearSelectedMods(){
    this.selectedMods = [];
  }

  clearPolarities() {
    this.polarityList = [];
  }

  clearScore(){
    this.count = 60;
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
    console.log("Count value :" + this.count + "\n \n \n \n \n");
  }

  // Tests

  displayAvailableModsStatus(message:String) {
    console.log("Length of availableMods : " + this.availableMods.length + "  | at : " + message);
    //console.log("availableMods : " + this.availableMods);

    for(var i=0; i<this.availableMods.length; i++){
      console.log("i : "+ i + "  |  " + this.availableMods[i]["Name"]);
    }
  }

  displaySelectedModsStatus(message:String) {
    console.log("Length of selectedMods : " + this.selectedMods.length + "  | at : " + message);
    //console.log("selectedMods : " + this.selectedMods);

    for(var i=0; i<this.selectedMods.length; i++){
      console.log("i : "+ i + "  |  " + this.selectedMods[i]["Name"]);
    }
  }
}
