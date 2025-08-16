import { FashionT } from "../models/fashionT";

export const fashionTData: FashionT = {
    id: 1,
    company: {
        name: "Fashion Trends",
        ruc: "1234567890",
        address: {
            city: "New York",
            principalStreet: "5th Avenue",
            secondaryStreet: "Broadway",
            code: "10001"
        },
    },
    brach: {
        id: 1,
        name: "Main Branch",
        address: {
            city: "New York",
            principalStreet: "5th Avenue",
            secondaryStreet: "Broadway",
            code: "10001"
        },
    },
    items: [
        {
            id: 1,
            product: {
                id: 1,
                name: "T-Shirt",
                price: 19.99,
                category: {
                    id: 1,
                    name: "Clothing"
                },
                stockByBranch: {
                    "1": 100,"2": 50,"3": 75,"4": 200,"5": 150
                }
            },
            quantity: 100
        },
        {
            id: 2,
            product: {
                id: 2,
                name: "Jeans",
                price: 49.99,
                category: {
                    id: 1,
                    name: "Clothing"
                },
                stockByBranch: {
                    "1": 200,"2": 30,"3": 75,"4": 250,"5": 150
                }
            },
            quantity: 50
        }
    ]
}