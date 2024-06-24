import { Component } from '@angular/core';
import { User, UserComponent } from '../user/user.component';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  public users = DUMMY_USERS;

  onUserClicked(user: User) {
    console.log('user selected: ', user.id);
  }
}
