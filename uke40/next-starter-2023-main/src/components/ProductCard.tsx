import {addItemButton, productInfo} from "@/types/types";

export default function ProductCard(product: productInfo & addItemButton) {
 const { itemId, name, price, category, description, addItem} = product;
 const priceString = price.toString();

 return (
     <article className="grid grid-cols-2 productCard h-64 flex-initial border-2 rounded max-w-xs justify-center">
         <h2 className="name text-center m-5 font-bold">{name}</h2>
         <div><p className="category bg-gray-300 m-5 py-1 px-2 rounded text-center">{category}</p></div>
         <p className="description grid overflow-hidden col-span-2 m-2">{description}</p>
         <p className="price text-center mt-5 font-bold">{priceString} kr</p>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 m-5 rounded" id={itemId} onClick={addItem}>Add to cart</button>
     </article>
 )
}