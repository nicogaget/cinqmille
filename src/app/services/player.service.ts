import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlayerInterface } from '../interfaces/player.interface';
import { PLAYERS } from '../mocks/mock.players';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {
  }

  getPlayers(): Observable<PlayerInterface[]> {
    const users = of(PLAYERS);
    return users;
  }
}
