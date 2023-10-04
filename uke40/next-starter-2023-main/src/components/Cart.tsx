import CartRow from "@/components/CartRow";
import {cartButtons, cartMap, productMap} from "@/types/types";
import {useState} from "react";

export default function Cart(props: productMap & cartMap & cartButtons) {
    const {products, cart, deleteButton, increaseButton, decreaseButton} = props;
    const [toggled, setToggled] = useState(false);
    const cartList = Array.from(cart.values());

    function productNameFromId(id: String) {
        const name = products.get(id)?.name
        return name ?? "Unknown"
    }

    return (
        <>
        <button onClick={() => setToggled((prev) => !prev)}>Open Cart</button>
            <section id="cart" className={`${toggled ? "opacity-100" : "opacity-0 invisible"} cart absolute mx-5 z-10 min-h-full w-1/3 border-2 bg-white transition-opacity ease-in-out duration-700`}>
            {cartList.map((cartItem) =>
                <CartRow deleteButton={deleteButton} increaseButton={increaseButton} decreaseButton={decreaseButton} key={cartItem.itemId} itemId={cartItem.itemId} itemName={productNameFromId(cartItem.itemId)} count={cartItem.count}></CartRow>
            )}
        </section>
        </>
    )

}