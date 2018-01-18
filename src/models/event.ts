export class Event{
	name:string;
	date:string;
	url:string;

	constructor(name:string, date:string, url:string){
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