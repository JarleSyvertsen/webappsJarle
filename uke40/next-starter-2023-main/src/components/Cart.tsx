import CartRow from "@/components/CartRow";

export default function Cart(props: { products: Map<String, productInfo>, cart: Map<String, cartData>, increaseButton: Function, decreaseButton: Function} ) {
    const {products, cart, increaseButton, decreaseButton} = props;
    const cartList = Array.from(cart.values());

    // Mulig å flytte til hook?
    function productNameFromId(id: String) {
        const name = products.get(id)?.name
        return name ?? "Unknown"
    }

    return (
        <ul className="cart z-10 absolute border-2 bg-white w-1/3">
            {cartList.map((cartItem) =>
                <CartRow increaseButton={increaseButton} decreaseButton={decreaseButton} key={cartItem.itemId} itemId={cartItem.itemId} itemName={productNameFromId(cartItem.itemId)} count={cartItem.count}></CartRow>
            )}
        </ul>
    )

}