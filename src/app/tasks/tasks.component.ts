import { Component, computed, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type User } from '../user/user.model';
import { type Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  userId = computed(() => this.user().id);
  tasks: Task[] = [
    {
      id: 't1',
      uid: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic advanced',
      dueDate: '2024-08-01',
    },
  ];

  public get selectedUserTasks() {
    return this.tasks.filter((task) => task.uid === this.userId());
  }
}
