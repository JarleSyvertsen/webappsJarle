import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";

async function fetchProducts(): Promise<Map<String,productInfo>> {
    const products = await fetch("http://localhost:3000/api/items/1")
        .then((response) => response.json() as unknown as productInfo[])

    const productMap = new Map<String, productInfo>

    products.map((jsonElement) => (productMap.set(jsonElement.id, { ...jsonElement})))
    return productMap
}

export default async function Home() {
    const productMap = await fetchProducts();
    const productArray = Array.from(productMap.values())
    return (
        <div>
            <ProductList products={productArray}/>
            <Cart products={productMap}></Cart>
        </div>)
}
