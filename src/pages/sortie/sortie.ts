import { Component } from '@angular/core';
import {Sortie} from "../../models/sortie";
import {WorldStateProvider} from "../../providers/worldState/worldState";

@Component({
  selector: 'page-sortie',
  templateUrl: 'sortie.html'
})
export class SortiePage {
  sorties:Sortie[]=[];

  constructor(public worldStateProvider: WorldStateProvider) {
    this.sorties = this.worldStateProvider.sorties;
    console.log(this.sorties);
  }

}
