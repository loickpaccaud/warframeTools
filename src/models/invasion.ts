export class Invasion {
  factionAtk:String;
  factionDef:String;
  node:String;
  date:String;
  count:number;
  goal:number;

  constructor(factionAtk:String, factionDef:String, node:String, date:String, count:number, goal:number) {
    this.factionAtk = factionAtk;
    this.factionDef = factionDef;
    this.node = node;
    this.date = date;
    this.count = count;
    this.goal = goal;
  }

  public getFactionAtk(){
    return this.factionAtk;
  }

  public getFactionDef(){
    return this.factionDef;
  }

  public getNode(){
    return this.node;
  }

  public getDate(){
    return this.date;
  }

  public getCount(){
    return this.count;
  }

  public getGoal(){
    return this.goal;
  }
}
