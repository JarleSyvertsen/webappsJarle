export default function ProductCard(product: productInfo) {
 const {  name, price, category, description } = product;
 const priceString = price.toString();


 return (
     <article className="grid grid-cols-2 productCard flex-initial border-2 rounded max-w-xs space-y-2">
         <h2 className="price font-bold m-2">{name}</h2>
         <p className="category text-end m-1 text-blue-500">{category}</p>
         <p className="description grid col-span-2 m-2">{description}</p>
         <p className="price font-bold m-2">{priceString} kr</p>
     </article>
 )
}