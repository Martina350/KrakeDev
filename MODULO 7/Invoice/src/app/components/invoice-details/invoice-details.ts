import { Component, Input } from '@angular/core';
import { invoiceItem } from '../../models/InvoiceItemM';
import { InvoiceItem } from "../invoice-item/invoice-item";

@Component({
  selector: 'app-invoice-details',
  imports: [InvoiceItem],
  templateUrl: './invoice-details.html',
})
export class InvoiceDetails {
  @Input()items!: invoiceItem[];
}
