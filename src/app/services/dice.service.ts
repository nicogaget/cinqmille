import { Injectable } from '@angular/core';
import { Dice } from '../models/dice.models';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DiceService {
  dice!: Dice;
  getDice(): Observable<Dice> {
    return of(this.dice)
  }
  setDice(dice: Dice) {
    this.dice = dice;
  }

}
