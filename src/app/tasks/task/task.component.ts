import { Component, input, output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  public task = input.required<Task>();
  public onCompleted = output<Task>();

  public onCompleteTask() {
    this.onCompleted.emit(this.task());
  }
}
