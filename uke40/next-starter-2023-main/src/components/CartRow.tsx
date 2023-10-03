export default function CartRow(cartItem: cartProp) {
    return (
        <article>
        <p className="itemCount">{cartItem.count.toString()}x</p>
        <p className="itemName">{cartItem.itemName}</p>
        <button className="btnIncrement">+</button>
        <button className="btnDecrease">-</button>
        </article>
    )
}