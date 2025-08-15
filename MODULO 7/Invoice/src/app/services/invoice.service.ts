import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoiceD';
import { Invoice } from '../models/InvoiceM';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice:Invoice=invoiceData;
  constructor() {}
  getInvoice(): Invoice {
    return this.invoice;
  }
}
