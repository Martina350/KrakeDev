import { Category } from "./categoryT";

export class Product {
    id!: number;
    name!: string;
    price!: number;
    category!: Category;
    stockByBranch!: Record<string, number>; 
}