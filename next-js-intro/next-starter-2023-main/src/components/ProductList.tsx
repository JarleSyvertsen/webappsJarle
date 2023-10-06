import ProductCard from "@/components/ProductCard";
import {addItemButton, productArray} from "@/types/types";

export default function ProductList(props: productArray & addItemButton) {
    const {products, addItem} = props;
    return (
        <div className="pt-24">
        <ul className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">{products.map( (product) =>
           <li key={product.itemId.toString()}>
               <ProductCard itemId={product.itemId} name={product.name} price={product.price} category={product.category} description={product.description} addItem={addItem} />
           </li>
            )}
        </ul>
        </div>
    )
}