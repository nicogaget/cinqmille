import { Component, OnInit } from '@angular/core';
import randomInt from 'random-int';
import randomInteger from 'random-int';
import { Dice } from '../../../models/dice.models';
import { ResultNotifyService } from '../../../services/result-notify.service';
import { DicePotService } from '../../../services/dice-pot.service';
import { Observable, of } from 'rxjs';
import { DiceService } from '../../../services/dice.service';

@Component({
  selector: 'app-gameplace',
  templateUrl: './gameplace.component.html',
  styleUrls: ['./gameplace.component.scss']
})
export class GameplaceComponent {


  dices: Dice[] = []
  selection: Dice[] = []
  constructor(private ds: DiceService) { }
  lancerLesDes() {
    this.ds.lancerLesDes();
    this.ds.getDices().forEach(obs => {
      obs.subscribe(data => {
        this.dices.push(data)
        //console.log('Observable data:', data);

      })
    })
  }

  Comptabiliser() {
    console.log(this.dices);
    this.dices.map((el) => {
      if (el.isSelected) {
        el.isCount = !el.isCount
        el.isSelected = !el.isSelected
        this.selection.push(el)
      }
    });




    // this.dices.map((el) => { el.isSelected ?? el.isCount });
    // console.log(this.dices);

    // this.dices = this.dices.filter((el) => { !el.isCount })

  }

  ajouterJoueur() { }
  preparerPartie() { }
  nouvellePartie() { }
  garder() { }


}
