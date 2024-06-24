import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User, UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users = DUMMY_USERS;

  onUserClicked(user: User) {
    console.log('user selected: ', user.id);
  }
}
