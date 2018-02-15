export class Event{
  id:String;
  name:String;
  date:String;
  url:String;

  constructor(id:String, name:String, date:String, url:String){
    this.name = name;
    this.date = date;
    this.url = url;
    this.id = id;
  }

  getId(){
    return this.id;
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

  compare(event:Event):boolean{
    return this.getId() === event.getId();
  }
}
