export class Alert{
  missionType:String;
  faction:String;
  location:String;
  date:String;
  minEnemyLevel:String;
  maxEnemyLevel:String;
  creditsReward:number;

  constructor(missionType:String, faction:String, location:String, date:String, minEnemyLevel:String, maxEnemyLevel:String, creditsReward:number){
    this.missionType = missionType;
    this.faction = faction;
    this.location = location;
    this.date = date;
    this.minEnemyLevel = minEnemyLevel;
    this.maxEnemyLevel = maxEnemyLevel;
    this.creditsReward = creditsReward;
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
}
