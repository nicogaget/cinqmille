import { Component, OnInit } from '@angular/core';
import { PlayerInterface } from '../../../interfaces/player.interface';
import { PlayerService } from '../../../services/player.service';

@Component({
  selector: 'app-score-tab',
  templateUrl: './score-tab.component.html',
  styleUrls: ['./score-tab.component.scss'],
})
export class ScoreTabComponent implements OnInit {
  players: PlayerInterface[] = [];

  constructor(private playerService: PlayerService) {
  }

  getPlayers(): void {
    this.playerService
      .getPlayers()
      .subscribe((players: PlayerInterface[]) => (this.players = players));
  }

  ngOnInit(): void {
    this.getPlayers();
  }
}
