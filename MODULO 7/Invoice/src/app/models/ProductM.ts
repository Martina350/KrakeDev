import { Category } from "./CategoryM";

export class Product {
    id!: number;
    name!: string;
    price!: number;
    description?: string; 
    category!: Category;
}