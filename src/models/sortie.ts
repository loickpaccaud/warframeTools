export class Sortie {
  id:String;
  boss:String;
  missionType:String;
  modifierType:String;
  node:String;
  date:String;

  constructor(id:String, boss:String, missionType:String, modifierType:String, node:String, date:String) {
    this.id = id;
    this.boss = boss;
    this.missionType = missionType;
    this.modifierType = modifierType;
    this.node = node;
    this.date = date;
  }

  getId(){
    return this.id;
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

  compare(sortie:Sortie):boolean{
    return this.getId() === sortie.getId();
  }
}
