import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SForm } from './components/s-form/s-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'student-form';
}
