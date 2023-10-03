import {uuidv4} from "@mswjs/interceptors/lib/utils/uuid";

const positiveAdjective = ["Stellar", "Perfect", "Cool", "Nice", "Awesome", "Impressive", "Considerable", "Desireable"];
const colours = ["Blue", "Red", "Purple", "Green", "Orange", "Yellow", "Grey"]
const categories = ["Cheese", "Electronics", "Camping", "Archery", "Canned Goods", "Clothing"]
const substantive = ["Television", "Rod", "Glasses", "Glue", "Glowing Rock", "Not Glowing Rock"]
const fluffWords = ["Recommended by 9/10th of a dentist", "Aromatic", "Delightful", "Works on raccoons", "Does not work on raccoons", "As seen on TV"]


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
    return description;
}

const createProducts = (count: number) => {
    const productMap = new Map<String, productInfo>

    for(let i = 0; i < count; i++) {
        const id = generateId();
        const product = {
             id: id,
             name: generateName(),
             price: generatePrice(),
             category: generateCategory(),
             description: generateDescription(5)
        }
        productMap.set(id, product);
    }
    return productMap;
}

export { createProducts }