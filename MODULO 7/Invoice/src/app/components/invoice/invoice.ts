import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/InvoiceM';
import { CompanyView } from "../company-view/company-view";
import { CustomerView } from "../customer-view/customer-view";
import { InvoiceDetails } from "../invoice-details/invoice-details";


@Component({
  selector: 'app-invoice',
  imports: [RouterOutlet, CompanyView, CustomerView, InvoiceDetails],
  templateUrl: './invoice.html',
})
export class InvoiceComplement implements OnInit {
  invoice!:Invoice;
  constructor(private service: InvoiceService) {}
  ngOnInit(): void {
    this.invoice=this.service.getInvoice();
  }
}
export { Invoice };

