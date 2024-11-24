import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Dice } from '../../models/dice.models';
import { Observable } from 'rxjs';
import { DiceService } from '../../services/dice.service';

@Component({
  selector: 'app-dice',
  template: `
    <fa-icon [icon]="dice.icon" [ngClass]="{'active':dice.isSelected,'isCount':dice.isCount}"></fa-icon>
  `,
  styles: `
    fa-icon {
      margin :5px;
      font-size: 80px;
    }
    fa-icon.active {
      color: chocolate;
      background-color: black;
    }
    fa-icon.isCount{
      font-size: 50px;
    }
    `})

export class DiceComponent implements OnInit {

  @Input() dice!: Dice;

  constructor(private ds: DiceService) {

  }

  ngOnInit(): void {

  }

  select() {
    this.dice.isSelected = !this.dice.isSelected
  }

}
