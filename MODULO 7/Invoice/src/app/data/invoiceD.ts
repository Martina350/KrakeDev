import { Invoice } from "../models/InvoiceM";

export const invoiceData :Invoice={
    id: "001",
    company: {
        ruc: '1745862137958',
        name: 'ClearMinds Consultores',
        address: {
            city: 'Quito',
            principalStreet: 'Juan Pablo Sanz',
            secondaryStreet: 'Inaquito',
            code: 'N-57'
        }
    },
    customer: {
        id: '1726312745',
        name: 'Martina ',
        surname: 'Leon',
        address: {
            city: 'Quito',
            principalStreet: 'Manuel Cordova Galarza',
            secondaryStreet: 'Mango Inga',
            code: 'N-87'
        }
    },
    items: [
        {
            id: 100,
            productId:{
                id: 500,
                name: 'Papas Rufles',
                price: 0.50,
                description: 'La mejor papa frita del mundo',
                category: {
                    id: 1,
                    name: 'Snacks'
                }
            },
            quantity: 23,
        },
        {
            id: 101,
            productId:{
                id: 550,
                name: 'Doritos',
                price: 0.60,
                description: 'Crujientes y deliciosos',
                category: {
                    id: 1,
                    name: 'Snacks'
                }   
            },
            quantity: 50,
        },
        {
            id: 102,
            productId:{
                id: 580,
                name: 'Kachitos',
                price: 0.30,
                description: 'Para cachudos',
                category: {
                    id: 1,
                    name: 'Snacks'
                }   
            },
            quantity: 70,
        },
    ],
}