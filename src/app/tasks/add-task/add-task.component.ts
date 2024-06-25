import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  onClosed = output<void>();
  newTaskSubmitted = output<NewTaskData>();
  title = signal('');
  summary = signal('');
  date = signal('');

  public onClose() {
    this.onClosed.emit();
  }

  onSubmit() {
    this.newTaskSubmitted.emit({
      title: this.title(),
      summary: this.summary(),
      dueDate: this.date(),
    });

    this.onClosed.emit();
  }
}
