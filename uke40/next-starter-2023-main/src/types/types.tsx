type productInfoList = {
    products: productInfo[];
}
type productInfoMap = {
    products: Map<String, productInfo>
}

type cartData = {
    itemId: String,
    count: Number
}

type cartProp = {
    itemId: String,
    count: Number,
    itemName: String
}

type productInfo = {
    id: String,
    name: String,
    price: Number,
    category: String,
    description: String
}
