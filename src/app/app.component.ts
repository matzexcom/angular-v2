import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { type User } from './user/user.model';

import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/400.css'; // Specify weight
import '@fontsource/poppins/400-italic.css';

const COMPONENTS = [HeaderComponent, UserComponent, TasksComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users = DUMMY_USERS;
  public selectedUser?: User;

  onUserClicked(user: User) {
    this.selectedUser = user;
  }
}
