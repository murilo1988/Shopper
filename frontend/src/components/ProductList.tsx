import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Product from '../types/typesProduct'
import '../App.scss'


function ProductList() {
    const { data, loading, error } = useFetch<Product[]>('/products');
    const [products, setProducts] = useState<Product[] | null>(null);

    const [editingProductId, setEditingProductId] = useState<number | null>(null);
    const [editedPrice, setEditedPrice] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, [data]);

    const handleEditPrice = (productId: number, currentPrice: string) => {
        setEditingProductId(productId);
        setEditedPrice(currentPrice);
    };

    const handleSavePrice = (code: number, currentSalesPrice: number, costPrice: number) => {
        if (editedPrice === null) {
            // Não há preço editado
            console.error("O preço editado é inválido.");
            return;
        }

        const newPrice = parseFloat(editedPrice);

        if (newPrice <= costPrice) {
            console.error("O novo preço não pode ser menor ou igual ao cost_price.");
            return;
        }

        if (newPrice > currentSalesPrice * 1.10) {
            console.error("O novo preço não pode aumentar mais de 10% do preço atual.");
            return;
        }

        if (newPrice < currentSalesPrice * 0.90) {
            console.error("O novo preço não pode ser menor que 90% do preço atual.");
            return;
        }

        axios
            .put(`/api/products/${code}`, { sales_price: newPrice })
            .then((response) => {
                if (response.status === 200) {
                    if (products) {
                        const updatedProducts = products.map((product: Product) =>
                            product.code === code
                                ? { ...product, sales_price: newPrice }
                                : product
                        );
                        setProducts(updatedProducts);
                    }
                }
            })
            .catch((error) => {
                console.error("Erro ao atualizar o preço do produto:", error);
            })
            .finally(() => {
                setEditingProductId(null);
                setEditedPrice(null);
            });
    };


    if (loading) return <div>Carregando</div>;
    if (error) return <div>Ocorreu um erro {error.message}</div>;

    return (
        <>
            <h2>Product List</h2>
            <div className="container">
                <ul>
                    {products &&
                        products.map((product) => (
                            <li className="product-list " key={product.name}>
                                <div>{product.code}</div>
                                <div>{product.name}</div>
                                {editingProductId === product.code ? (
                                    <>
                                        <input
                                            type="number"
                                            value={editedPrice || ""}
                                            onChange={(e) => setEditedPrice(e.target.value)}
                                        />
                                        <button onClick={() => handleSavePrice(product.code, product.sales_price, product.cost_price)}>Salvar</button>
                                    </>
                                ) : (
                                    <div>{product.sales_price}</div>
                                )}
                                <br />
                                <button onClick={() => handleEditPrice(product.code, product.sales_price.toString())}>Editar</button>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}

export default ProductList;
