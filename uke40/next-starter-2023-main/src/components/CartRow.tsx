export default function CartRow(cartItem: cartProp & incrementDecreaseButtons) {
    return (
        <article className="flex justify-center gap-20">
        <p className="itemCount">{cartItem.count.toString()}x</p>
        <p className="itemName">{cartItem.itemName}</p>
        <button className="btnIncrement" id={cartItem.itemId} onClick={cartItem.increaseButton}>+</button>
        <button className="btnDecrease" id={cartItem.itemId} onClick={cartItem.decreaseButton}>-</button>
        </article>
    )
}