import ProductList from './ProductList';
interface ProducData {
    id: number,
    name: string,
    priceProduct: number
}

interface ProductListPorps {
    products: ProducData[]
    updatedPrice: (id: number, newPrice: number) => void
}
const ProductList: React.FC<ProductListProps> = ({ products, updatedPrice }) => {

    return (
        <div>ProductList</div>
    )
}



export default ProductList