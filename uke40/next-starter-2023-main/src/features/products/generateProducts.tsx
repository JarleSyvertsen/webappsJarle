import {uuidv4} from "@mswjs/interceptors/lib/utils/uuid";
import {productInfo} from "@/types/types";

const positiveAdjective = ["Stellar", "Perfect", "Cool", "Nice", "Awesome", "Impressive", "Considerable", "Desireable"];
const colours = ["Blue", "Red", "Purple", "Green", "Orange", "Yellow", "Grey"]
const categories = ["Cheese", "Electronics", "Camping", "Archery", "Canned Goods", "Clothing"]
const substantive = ["Television", "Rod", "Glasses", "Glue", "Glowing Rock", "Not Glowing Rock"]
const fluffWords = ["Agreeable", "Large", "Calm", "Dazzling", "Mouse", "Car", "Bike", "Approved", "Aromatic", "Delightful", "As", "Seen", "On", "TV", "Raccoon", "Lactose", "Flowery"]


const generateId = () => {
// Ikke UUID-compliant, tar en kortere variant for penhetens skyld.
   return uuidv4().toString().substring(0,8);
}

const getRandomItemFromArray = (array: string[]) => {
    const arrayLength = array.length;
    const index = Math.floor(Math.random() * arrayLength)

    return array[index];
}

const generateName = () => {
    return getRandomItemFromArray(positiveAdjective) + " " + getRandomItemFromArray(colours) + " " + getRandomItemFromArray(substantive)
}

const generateCategory = () => {
    return getRandomItemFromArray(categories)
}

const generatePrice = () => {
    return Math.floor(Math.random() * 1000)
}

const generateDescription = (length: number) => {
    let description: string = "";
    for(let i = 0; i < length; i++) {
        description = description.concat(getRandomItemFromArray(fluffWords) + " ")
    }
    description = description.substring(0, description.length - 1)
    return description;
}

const createProducts = (count: number) => {
    const productMap = new Map<String, productInfo>

    for(let i = 0; i < count; i++) {
        const id = generateId();
        const product = {
             itemId: id,
             name: generateName(),
             price: generatePrice(),
             category: generateCategory(),
             description: generateDescription(8)
        }
        productMap.set(id, product);
    }
    return productMap;
}

export { createProducts, positiveAdjective, colours, substantive, fluffWords }