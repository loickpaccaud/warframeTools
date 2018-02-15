export class Alert{
  id:String;
  missionType:String;
  faction:String;
  location:String;
  date:String;
  minEnemyLevel:String;
  maxEnemyLevel:String;
  creditsReward:number;

  constructor(id:String, missionType:String, faction:String, location:String, date:String, minEnemyLevel:String, maxEnemyLevel:String, creditsReward:number){
    this.id = id;
    this.missionType = missionType;
    this.faction = faction;
    this.location = location;
    this.date = date;
    this.minEnemyLevel = minEnemyLevel;
    this.maxEnemyLevel = maxEnemyLevel;
    this.creditsReward = creditsReward;
  }

  getId(){
    return this.id;
  }

  getMissionType(){
    return this.missionType;
  }

  getFaction(){
    return this.faction;
  }

  getLocation(){
    return this.location;
  }

  getDate(){
    return this.date;
  }

  getMinEnemyLevel(){
    return this.minEnemyLevel;
  }

  getMaxEnemyLevel(){
    return this.maxEnemyLevel;
  }

  getCreditsReward(){
    return this.creditsReward;
  }


  compare(alert:Alert):boolean{
    return this.getId() === alert.getId();
  }
}
