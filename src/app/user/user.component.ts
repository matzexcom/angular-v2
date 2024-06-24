import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public selectedUser = signal(
    DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)],
  );
  public imagePath = computed(
    () => `assets/users/${this.selectedUser().avatar}`,
  );

  // public get imagePath() {
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }

  public onSelectUser() {
    console.log('clicked user');
    this.selectedUser.set(
      DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)],
    );
  }
}
