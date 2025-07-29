import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearningComponent } from "./components/learning/learning";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LearningComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = ('LearningApp');
}
