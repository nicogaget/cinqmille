import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { SelectionNotifyService } from '../../services/selection-notify.service';
import { Dice } from '../../models/dice.models';
import { ResultNotifyService } from '../../services/result-notify.service';
import { DicePotService } from '../../services/dice-pot.service';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrl: './plateau.component.scss'
})
export class PlateauComponent implements OnInit {

  @Input() listDes!: Dice[];
  @Output() selectDeEvent = new EventEmitter<Dice>();

  constructor(private dps: DicePotService) { }

  selection: Dice[] = [];
  ngOnInit(): void {
    this.dps.getDiceList().subscribe({
      next: (value) => this.listDes = value,
    });
  }

  select(de: Dice) {
    console.log("t1");
    /* on vide la liste de dé selectionnés */
    this.selection = [];
    //pour chaque de de la list
    this.listDes.forEach(element => {
      // si on a cliqué sur le dé alors on le set isSelected
      if (element == de) {
        element.isSelected = !element.isSelected;

      }

    });
    //this.dps.setDiceList()
  }

}
