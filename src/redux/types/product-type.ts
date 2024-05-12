export type productsType = {
    id: number;
    productName: string;
    image: string;
    category: string;
    price: number;
    quantity: number;
    status: string;
};

export type addProductType = {
    productName: string;
    image: string;
    category: string;
    price: number;
    quantity: number;
    status: string;
};


export type categoryType = {
    id: number;
    name: string;
}

export type statusType = {
    id: number;
    name: string;
}