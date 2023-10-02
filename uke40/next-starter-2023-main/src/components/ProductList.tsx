import ProductCard from "@/components/ProductCard";

type productInfoList = {
    products: productInfo[];
}
type productInfo = {
    id: String,
    name: String,
    price: Number,
    category: String,
    description: String
}

export default function ProductList({products} : productInfoList) {
    return (
        <div className="pt-24">
        <ul className="flex justify-center gap-8">{products.map( (product) =>
            <ProductCard id={product.id} name={product.name} price={product.price} category={product.category} description={product.description} />
        )}
        </ul>
        </div>
    )
}