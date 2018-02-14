export class Sortie {
  boss:String;
  missionType:String;
  modifierType:String;
  node:String;
  date:String;

  constructor(boss:String, missionType:String, modifierType:String, node:String, date:String) {
    this.boss = boss;
    this.missionType = missionType;
    this.modifierType = modifierType;
    this.node = node;
    this.date = date;
  }

  getBoss(){
    return this.boss;
  }

  getMissionType(){
    return this.missionType;
  }

  getModifierType(){
    return this.modifierType;
  }

  getNode(){
    return this.node;
  }

  getDate(){
    return this.date;
  }
}
