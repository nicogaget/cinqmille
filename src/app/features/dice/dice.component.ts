import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Dice } from '../../models/dice.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dice',
  template: `
    <fa-icon [icon]="dice.icon" [ngClass]="{'active':dice.isSelected}"></fa-icon>
  `,
  styles: `
    fa-icon {
      font-size: 80px;
    }
    fa-icon.active {
      color: chocolate;
      background-color: black;
    }
    fa-icon.inSelection{
      font-size: 60px;
    }`})

export class DiceComponent {
  @Input() dice!: Dice;
  @Input() inSelection: boolean = false;
}
