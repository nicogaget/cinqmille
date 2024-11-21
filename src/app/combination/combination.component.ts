import {Component, OnInit} from '@angular/core';
import {CombinaisonService} from "../services/combinaison.service";

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss']
})
export class CombinationComponent implements OnInit {


  constructor(private combinaisonService: CombinaisonService) {
  }

  hasCombi() {
    this.combinaisonService.containsCombi("111");
  }


  ngOnInit(): void {
  }

}
