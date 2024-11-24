import { Injectable } from '@angular/core';
import { Dice } from '../models/dice.models';
import { Observable, of } from 'rxjs';
import randomInt from 'random-int';


@Injectable({
  providedIn: 'root',
})
export class DiceService {
  dices: Observable<any>[] = [];


  lancerLesDes() {

    for (let i = 0; i < 5; i++) {
      //jet.push(new Dice(randomInt(1, 6)));
      const observable = this.createObservable(new Dice(randomInt(1, 6)));
      this.dices.push(observable);
    }
    //this.createObservables();
    //this.subscribeToObservables();

  }

  getDices() {
    return this.dices
  }

  createObservable(item: any): Observable<any> {
    return of(item);
  }

  // createObservables() {
  //   for (const item of this.dices) {
  //     const observable = this.createObservable(item);
  //     this.observables.push(observable);
  //   }
  // }

  // subscribeToObservables() {
  //   this.observables.forEach(obs => {
  //     obs.subscribe(data => {
  //       this.dices.push(data)
  //       console.log('Observable data:', data);
  //     });
  //   });
  // }
}
