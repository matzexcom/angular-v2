import type { NewTaskData, Task } from './task/task.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      uid: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic advanced',
      dueDate: '2024-08-01',
    },
  ];

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task: Task) => task.uid === userId);
  }

  addTask(taskData: NewTaskData, uid: string): void {
    this.tasks.push({
      ...taskData,
      id: crypto.randomUUID(),
      uid,
    });
  }

  removeTask(task: Task): void {
    this.tasks = this.tasks.filter((task: Task) => task.id !== task.id);
  }
}
