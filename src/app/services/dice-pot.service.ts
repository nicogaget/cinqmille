import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Dice } from '../models/dice.models';
import randomInt from 'random-int';

@Injectable({
  providedIn: 'root',
})
export class DicePotService {
  dicesList!: Dice[];

  private diceList$ = new Subject<Dice[]>();
  private selectedDiceList$ = new Subject<Dice[]>();

  private selectedDiceList: BehaviorSubject<Dice[]> = new BehaviorSubject<Dice[]>([]);
  public dice$: Observable<Dice[]> = this.selectedDiceList.asObservable();

  getSelectedDicesList(): Observable<Dice[]> {
    return this.selectedDiceList$
  }

  setSelectedDicesList(list: Dice[]) {
    this.selectedDiceList$.next(list);
    console.log(list);

  }

  getDiceList() {
    return this.diceList$;
  }

  setDiceList(nbrDe: number) {
    let jet = []
    for (let i = 0; i < nbrDe; i++) {
      jet.push(new Dice(randomInt(1, 6)));
    }

    this.diceList$.next(jet);
  }

  addRemoveSelection(de: Dice) {
    const currentItems = this.selectedDiceList.value;
    this.selectedDiceList.next([...currentItems, de],)
  }

  // occurance(arr: number[], val: number) {
  //   arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  // }
}


