import {cartButtons, cartProp} from "@/types/types";

export default function CartRow(cartItem: cartProp & cartButtons) {
    return (
        <article className="cartElement flex justify-between gap-2">
        <p className="itemCount w-1/6 rounded border-2 text-center py-2 px-4">{cartItem.count.toString()}x</p>
        <p className="itemName w-1/3">{cartItem.itemName}</p>
        <button className="btnIncrement bg-green-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id={cartItem.itemId} onClick={cartItem.increaseButton}>+</button>
        <button className="btnDecrease bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id={cartItem.itemId} onClick={cartItem.decreaseButton}>-</button>
        <button className="btnDelete bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id={cartItem.itemId} onClick={cartItem.deleteButton}>x</button>
        </article>
    )
}