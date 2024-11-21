import { Component, OnInit } from '@angular/core';
import randomInt from 'random-int';
import randomInteger from 'random-int';
import { Dice } from '../../../models/dice.models';
import { ResultNotifyService } from '../../../services/result-notify.service';
import { DicePotService } from '../../../services/dice-pot.service';
import { Observable, Subscription } from 'rxjs';
import { DiceService } from '../../../services/dice.service';

@Component({
  selector: 'app-gameplace',
  templateUrl: './gameplace.component.html',
  styleUrls: ['./gameplace.component.scss']
})
export class GameplaceComponent implements OnInit {
  listDe: Dice[] = [];
  selection: Dice[] = [];
  constructor(private dps: DicePotService) { }
  ngOnInit(): void {
    this.dps.getDiceList().subscribe({
      next: (value) => { this.listDe = value }
    })
    console.log(this.listDe);

  }


  /** x => nbre de dé à lancer */
  lancerLesDes() {
    this.dps.setDiceList(5);
  }

  continuer() {
    throw new Error('Method not implemented.');
  }

  Comptabiliser() {
    let list: any = []

    console.log("test");
    this.selection.forEach(element => {
      element.isSelected ? list.push(element) : ""
    });

    this.dps.setSelectedDicesList(list)

    // on récupère la liste de dé
    //on créé un liste avec 
    //le résultat filtré par status de selection
    //this.dps.addRemoveSelection()

    //console.log(selection);


  }

}
