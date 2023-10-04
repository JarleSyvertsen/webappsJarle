'use client'
import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";
import useCart from "@/hooks/useCart";
import {useEffect, useState} from "react";

export default function Page() {

    const [productArray, setProductArray] = useState(new Array<productInfo>)
    const { addItemButton, deleteButton, cartMap ,incrementButton, decreaseButton } = useCart();

    useEffect(() => {
        fetch("http://localhost:3000/api/items/random/10")
            .then((response) => response.json() as unknown as productInfo[])
            .then(data => setProductArray(data))
    }, [])

    const productMap = new Map(productArray.map(product => [product.itemId, {...product}]))

    return (
        <div>
            <Cart products={productMap} cart={cartMap} deleteButton={deleteButton} decreaseButton={decreaseButton} increaseButton={incrementButton}></Cart>
            <ProductList products={productArray} addItem={addItemButton} />
        </div>)
}
