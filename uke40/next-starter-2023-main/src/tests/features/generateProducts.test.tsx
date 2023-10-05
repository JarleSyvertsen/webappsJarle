import {
    colours,
    createProducts,
    fluffWords,
    positiveAdjective,
    substantive
} from "@/features/products/generateProducts";
import {productInfo} from "@/types/types";

describe("The returned elements from generateProducts should contain certain attributes.", () => {
    test("Generate products should return the correct amount of elements", () => {
        const products = createProducts(5);
        expect(products.size).toBe(5);
    })
    test("Generate products should return the proper set of attributes", () => {
        const products = createProducts(5);
        const product = products.entries().next().value[1];

        expect(product).toHaveProperty("itemId")
        expect(product).toHaveProperty("price")
        expect(product).toHaveProperty("name")
        expect(product).toHaveProperty("category")
        expect(product).toHaveProperty("description")
    })
    test("The name should contain the proper pattern.", () => {
        const products = createProducts(5);
        const product = products.entries().next().value[1];
        const nameParts = product.name.split(' ');

        expect(positiveAdjective.includes(nameParts[0])).toBe(true)
        expect(colours.includes(nameParts[1])).toBe(true)
        expect(substantive.includes(nameParts[2])).toBe(true)
    })
    test("The description should only consist of fluff words", () => {
        const products = createProducts(5);
        const product = products.entries().next().value[1];
        const descriptionParts = product.description.split(' ');


        test.each(descriptionParts)("Add parts", ({part}) => {

        }
    }
)