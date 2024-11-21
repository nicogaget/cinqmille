import { Component, Input, OnInit } from '@angular/core';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { SelectionNotifyService } from '../../../services/selection-notify.service';
import { Dice } from '../../../models/dice.models';
import { DicePotService } from '../../../services/dice-pot.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss'
})
export class SelectionComponent {
  select(_t6: Dice) {
    throw new Error('Method not implemented.');
  }

  selection: Dice[] = [];
  constructor(private dps: DicePotService) { }

  ngOnInit(): void {
    this.dps.getDiceList().subscribe({
      next: value => this.selection = value
    })
  }

}
