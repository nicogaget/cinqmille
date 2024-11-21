import { Component, OnInit } from '@angular/core';
import { PlayerInterface } from '../../interfaces/player.interface';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
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
