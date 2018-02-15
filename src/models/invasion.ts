export class Invasion {
  id:String;
  factionAtk:String;
  factionDef:String;
  node:String;
  date:String;
  count:number;
  goal:number;
  progression:number;

  constructor(id:String, factionAtk:String, factionDef:String, node:String, date:String, count:number, goal:number) {
    this.id
    this.factionAtk = factionAtk;
    this.factionDef = factionDef;
    this.node = node;
    this.date = date;
    this.count = count;
    this.goal = goal;
    this.progression = Math.floor(((this.count + this.goal)/(2*this.goal))*100);
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

  public getProgression(){
    return this.progression;
  }

  compare(invasion:Invasion):boolean{
    return this.getFactionAtk() === invasion.getFactionAtk() &&
      this.getFactionDef() === invasion.getFactionDef() &&
      this.getNode() === invasion.getNode() &&
      this.getDate() === invasion.getDate() &&
      this.getCount() === invasion.getCount() &&
      this.getGoal() === invasion.getGoal();
  }
}
