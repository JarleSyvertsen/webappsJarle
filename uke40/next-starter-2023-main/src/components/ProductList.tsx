import ProductCard from "@/components/ProductCard";

export default function ProductList({products} : productInfoList) {
    return (
        <div className="pt-24">
        <ul className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">{products.map( (product) =>
           <li key={product.id.toString()}>
               <ProductCard id={product.id} name={product.name} price={product.price} category={product.category} description={product.description} />
           </li>
            )}
        </ul>
        </div>
    )
}