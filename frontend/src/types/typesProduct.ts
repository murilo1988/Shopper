export default interface Product {
    code: number;
    name: string;
    cost_price: number;
    sales_price: number;
}


export default interface Packs {
    id: number,
    pack_id: number,
    product_id: number,
    qty: number


}
