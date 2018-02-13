export class Alert{
  missionType:String;
  faction:String;
  location:String;
  date:String;
  minEnemyLevel:String;
  maxEnemyLevel:String;

  constructor(missionType:String, faction:String, location:String, date:String, minEnemyLevel:String, maxEnemyLevel:String){
    this.missionType = missionType;
    this.faction = faction;
    this.location = location;
    this.date = date;
    this.minEnemyLevel = minEnemyLevel;
    this.maxEnemyLevel = maxEnemyLevel;
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
