import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { ControlComponent } from '../../ui/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  title = signal<string>('');
  request = signal<string>('');
  form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit() {
    console.log(this.title(), this.request());
    this.form().nativeElement.reset();
  }
}
