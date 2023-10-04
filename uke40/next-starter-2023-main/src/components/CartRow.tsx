import {cartButtons, cartProp} from "@/types/types";

export default function CartRow(cartItem: cartProp & cartButtons) {
    return (
        <article className="cartElement flex justify-between gap-10">
        <p className="itemCount">{cartItem.count.toString()}x</p>
        <p className="itemName">{cartItem.itemName}</p>
        <button className="btnIncrement" id={cartItem.itemId} onClick={cartItem.increaseButton}>+</button>
        <button className="btnDecrease" id={cartItem.itemId} onClick={cartItem.decreaseButton}>-</button>
        <button className="btnDelete" id={cartItem.itemId} onClick={cartItem.deleteButton}>x</button>
        </article>
    )
}