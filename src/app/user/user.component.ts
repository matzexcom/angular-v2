import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
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
