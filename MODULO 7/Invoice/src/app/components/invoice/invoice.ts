import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/InvoiceM';
import { CompanyView } from "../company-view/company-view";
import { CustomerView } from "../customer-view/customer-view";
import { InvoiceDetails } from "../invoice-details/invoice-details";


@Component({
  selector: 'app-invoice',
  standalone: true, // Si estás usando standalone components
  imports: [
    CompanyView,
    CustomerView,
    InvoiceDetails
  ],
  templateUrl: './invoice.html'
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.service.getInvoice().subscribe(
      (data: Invoice) => {
        this.invoice = data;
        console.log('Datos recibidos del backend:', data);
      },
      (error) => {
        console.error('Error al obtener datos del backend:', error);
        console.error('Asegúrate de que el backend esté en el puerto 3000');
      }
    );
  }
}

