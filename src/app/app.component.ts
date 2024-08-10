import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button/button.component';
import { InputComponent } from './components/input/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  inputs = [
    {
      type: "text",
      label: "Name",
      placeholder: "First name"
    },
    {
      type: "number",
      label: "Numero de telefono",
      placeholder: "3*******"
    },
    {
      type: "password",
      label: "Passwowrd",
      placeholder: "**********"
    },
    {
      type: "email",
      label: "Email",
      placeholder: "email@gmail.com"
    },
    {
      type: "button",
      label: "Registrar",
      placeholder: "email@gmail.com"
    }
  ];

  isLogin = true;

  logOut() {
    this.isLogin = false;
  }
}
