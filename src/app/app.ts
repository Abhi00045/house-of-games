import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from './Components/navigation-bar/navigation-bar';
import { Mainpage } from "./Pages/mainpage/mainpage";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mainpage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FAFI');
}
