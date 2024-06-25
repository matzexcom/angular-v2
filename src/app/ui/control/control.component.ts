import { Component, input, output } from '@angular/core';

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'textarea';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  label = input<string>('');
  type = input<InputType>('text');
  id = input.required<string>();
  value = input.required<string>();
  valueChange = output<string>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.valueChange.emit(target.value);
    }
  }
}
