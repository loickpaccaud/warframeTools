import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RiflesProvider} from '../../providers/rifles/rifles';
import {Rifle} from '../../models/rifle';


@Component({
  selector: 'page-rifle',
  templateUrl: 'rifle.html'
})
export class RiflePage {

  private jsonResponse;
  private rifles;

  constructor(public navCtrl: NavController, public riflesProvider: RiflesProvider) {

    this.riflesProvider.getData().subscribe(
          data => {
              this.jsonResponse = JSON.parse(JSON.stringify(data));
              console.log(this.jsonResponse);
      });

      for(var i in this.jsonResponse) {

        var item = this.jsonResponse[i];
        var r = new Rifle();

        r.setName(item.NAME);

        this.rifles.push(r);
    }

    console.log(this.rifles);
  }
}
