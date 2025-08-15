import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Invoice, InvoiceComplement } from './components/invoice/invoice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceComplement],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = ('Invoice');
}
