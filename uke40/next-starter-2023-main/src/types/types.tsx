type cartData = {
    itemId: string,
    count: number
}

type cartProp = {
    itemId: string,
    count: number,
    itemName: String
}

type productInfo = {
    itemId: string,
    name: string,
    price: number,
    category: string,
    description: string
}

type addItemButton = {
    addItem: Function
}

type incrementDecreaseButtons = {
    increaseButton: Function,
    decreaseButton: Function
}