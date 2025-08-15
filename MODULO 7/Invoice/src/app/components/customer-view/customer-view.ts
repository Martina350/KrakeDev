import { Component, Input } from '@angular/core';
import { Customer } from '../../models/CustomerM';

@Component({
  selector: 'app-customer-view',
  imports: [],
  templateUrl: './customer-view.html',
})
export class CustomerView {
  @Input()customer!: Customer;
}
