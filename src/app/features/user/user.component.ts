import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user.interface';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((users: User[]) => (this.users = users));
  }

  ngOnInit() {
    this.getUsers();
  }
}
