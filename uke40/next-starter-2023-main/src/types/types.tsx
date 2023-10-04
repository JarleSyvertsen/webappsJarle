type productMap = {
    products: Map<String, productInfo>
}
type cartMap = {
    cart: Map<String, cartData>
}

type productArray = {
    products : productInfo[]
}

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

type cartButtons = {
    increaseButton: Function,
    decreaseButton: Function,
    deleteButton: Function
}