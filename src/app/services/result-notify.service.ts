import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Dice } from '../models/dice.models';

@Injectable({
  providedIn: 'root'
})
export class ResultNotifyService {
  private subject = new Subject<Dice[]>();

  sendMessage(dices: Dice[]) {
    this.subject.next(dices);
    console.log("dices sent");

  }

  getMessage() {
    console.log("get dices");
    return this.subject;
  }
}
