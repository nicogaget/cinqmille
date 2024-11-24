import { Component, Input, OnInit } from '@angular/core';
import { DicePotService } from '../../services/dice-pot.service';
import { Dice } from '../../models/dice.models';

@Component({
  selector: 'app-selected-dices',
  templateUrl: './selected-dices.component.html',
  styleUrl: './selected-dices.component.scss'
})
export class SelectedDicesComponent implements OnInit {

  selection: Dice[] = [];
  constructor(private dps: DicePotService) { }

  ngOnInit(): void {
    // this.dps.getDiceList().subscribe({
    //   next: value => this.selection = value
    // })
  }
}
