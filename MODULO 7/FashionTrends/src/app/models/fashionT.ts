import { Branch } from "./branchT";
import { CompanyInfo } from "./companyT";
import { fashionItem } from "./fashionItems";

export class FashionT{
    id!: number;
    company!: CompanyInfo;
    brach!: Branch;
    items!: fashionItem[];
}