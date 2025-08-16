import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FashionTrends } from "./components/fashion-t/fashion-t";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FashionTrends],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title=('FashionTrends');
}
