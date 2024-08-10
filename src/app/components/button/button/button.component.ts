import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() value = "Register";
  @Output() click = new EventEmitter();

  doClick() {
    this.click.emit("clicked");
  }
}
