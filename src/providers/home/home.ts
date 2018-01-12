import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeProvider {
  apiUrl = "http://content.warframe.com/dynamic/worldState.php";

  constructor(public http: HttpClient) {
   
  }

  getworldState() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
}
