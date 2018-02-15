import { Component } from '@angular/core';
import {Sortie} from "../../models/sortie";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-sortie',
  templateUrl: 'sortie.html'
})
export class SortiePage {
  sorties:Sortie[]=[];

  constructor(public navParams: NavParams) {
    this.sorties = navParams.get("paramObject");
  }

}
