import type { NewTaskData, Task } from './task/task.model';
import { Injectable } from '@angular/core';
import { z } from 'zod';
import { TasksComponent } from './tasks.component';

const TaskObject = z.object({
  id: z.string(),
  uid: z.string(),
  title: z.string(),
  summary: z.string(),
  dueDate: z.string().date(),
});

const TasksArraySchema = z.array(TaskObject);

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

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      const tasksParsed = JSON.parse(tasks);

      const result = TasksArraySchema.safeParse(tasksParsed);

      if (result.success) {
        this.tasks = result.data;
      } else {
        console.error(result.error);
      }
    }
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task: Task) => task.uid === userId);
  }

  addTask(taskData: NewTaskData, uid: string): void {
    this.tasks.push({
      ...taskData,
      id: crypto.randomUUID(),
      uid,
    });
    this.saveTask();
  }

  removeTask(task: Task): void {
    this.tasks = this.tasks.filter((task: Task) => task.id !== task.id);
    this.saveTask();
  }
}
