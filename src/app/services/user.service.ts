import {Injectable} from '@angular/core';
import {User} from '../interfaces/user.interface';

import {Observable, of} from 'rxjs';
import {USERS} from '../mocks/mock-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any;

  constructor() {
  }

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }
}
