import { Component, EventEmitter, Input, output, Output } from '@angular/core';

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
  @Input({ required: true }) user!: User;
  // Angular signals approach
  // public user = input.required<User>();
  // public imagePath = computed(() => `assets/users/${this.user().avatar}`)

  @Output() onUserClicked = new EventEmitter<User>();
  // Angular signals approach
  // select = output<User>();

  public get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  public onSelectUser() {
    this.onUserClicked.emit(this.user);
  }
}
