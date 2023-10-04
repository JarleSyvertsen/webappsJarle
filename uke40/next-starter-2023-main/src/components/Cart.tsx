import CartRow from "@/components/CartRow";
import {cartButtons, cartMap, productMap} from "@/types/types";

export default function Cart(props: productMap & cartMap & cartButtons) {
    const {products, cart, deleteButton, increaseButton, decreaseButton} = props;
    const cartList = Array.from(cart.values());

    function productNameFromId(id: String) {
        const name = products.get(id)?.name
        return name ?? "Unknown"
    }

    return (
        <ul id="cart" className="cart z-10 absolute border-2 bg-white w-1/3">
            {cartList.map((cartItem) =>
                <CartRow deleteButton={deleteButton} increaseButton={increaseButton} decreaseButton={decreaseButton} key={cartItem.itemId} itemId={cartItem.itemId} itemName={productNameFromId(cartItem.itemId)} count={cartItem.count}></CartRow>
            )}
        </ul>
    )

}