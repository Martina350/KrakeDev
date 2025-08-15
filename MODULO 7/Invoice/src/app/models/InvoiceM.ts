import { company } from "./CompanyM";
import { Customer } from "./CustomerM";
import { invoiceItem } from "./InvoiceItemM";

export class Invoice {
    id!: string;
    company!:company;
    customer!:Customer;
    items!: invoiceItem[];    
}