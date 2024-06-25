import { Component, computed, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type User } from '../user/user.model';
import { NewTaskData, type Task } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  userId = computed(() => this.user().id);
  public showAddForm = false;

  constructor(private readonly taskService: TasksService) {}

  public get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId());
  }

  onTaskCompleted(completedTask: Task) {
    this.taskService.removeTask(completedTask);
  }

  onAddTaskClicked() {
    this.showAddForm = true;
  }

  addTask(newTask: NewTaskData) {
    this.taskService.addTask(newTask, this.userId());
  }
}
