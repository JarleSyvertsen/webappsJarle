import {MouseEventHandler} from "react";

export type productMap = {
    products: Map<String, productInfo>
}
export type cartMap = {
    cart: Map<String, cartData>
}

export type productArray = {
    products : productInfo[]
}

export type cartData = {
    itemId: string,
    count: number
}

export type cartProp = {
    itemId: string,
    count: number,
    itemName: String
}

export type productInfo = {
    itemId: string,
    name: string,
    price: number,
    category: string,
    description: string
}

export type addItemButton = {
    addItem: MouseEventHandler
}

export type cartButtons = {
    increaseButton: MouseEventHandler,
    decreaseButton: MouseEventHandler,
    deleteButton: MouseEventHandler
}

