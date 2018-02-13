export class Event{
  name:String;
  date:String;
  url:String;

  constructor(name:String, date:String, url:String){
    this.name = name;
    this.date = date;
    this.url = url;
  }

  getName(){
    return this.name;
  }

  getDate(){
    return this.date;
  }

  getUrl(){
    return this.url;
  }
}
