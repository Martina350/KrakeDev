import { Component, Input } from '@angular/core';
import { invoiceItem } from '../../models/InvoiceItemM';

@Component({
  selector: 'tr[app-invoice-item]',
  imports: [],
  templateUrl: './invoice-item.html',
})
export class InvoiceItem {
  @Input() items!:invoiceItem;
}
