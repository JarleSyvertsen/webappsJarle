import CartRow from "@/components/CartRow";

export default function Cart(products: productInfoMap) {
    const productList = products.products;
    const cart: cartData[] = [{itemId: "Abc", count: 1}];
    function productNameFromId(id: String) {
        const name = productList.get(id)?.name
        return name ?? "Unknown"
    }
    return (
        <ul className="cart">
            {cart.map((cartItem) =>
                <CartRow itemId={cartItem.itemId} itemName={productNameFromId(cartItem.itemId)} count={cartItem.count}></CartRow>
            )}
        </ul>
    )

}