export interface Sale {
    name: string;
    status: string;
    date: string;
    price: number;
    class:string;
}


export const latastSales:Sale[]=[
    {
        name: 'Elite admin',
        status: 'SALE',
        date: 'April 18, 2017',
        price: 24,
        class:'label-success'
    },
    {
        name: 'Real Homes WP Theme',
        status: 'EXTENDED',
        date: 'April 19, 2017',
        price: 1250,
        class:'label-info'
    },
    {
        name: 'Ample Admin',
        status: 'Tax',
        date: 'April 19, 2017',
        price: 1250,
        class:'label-purple'
    },
    {
        name: 'Medical Pro WP Theme',
        status: 'SALE',
        date: 'April 20, 2017',
        price: -24,
        class:'label-success'
    },
    {
        name: 'Digital Agency PSD',
        status: 'TAX',
        date: 'April 18, 2017',
        price: -14,
        class:'label-danger'
    },
]