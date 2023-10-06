import {render, renderHook} from "@testing-library/react";
import Cart from "@/components/Cart";
import { createProducts } from "@/features/products/generateProducts";
import useCart from "@/hooks/useCart";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { cartData, productInfo} from "@/types/types";
import {MouseEventHandler} from "react";

describe("Cart functions should behave properly", () => {
    const buildCart = (products: Map<String, productInfo>, result: { current: {
            incrementButton: MouseEventHandler;
            deleteButton: MouseEventHandler;
            decreaseButton: MouseEventHandler;
            cartMap: Map<String, cartData>}
    }) =>
    {
       return <Cart products={products}
              cart={result.current.cartMap}
              decreaseButton={result.current.decreaseButton}
              deleteButton={result.current.deleteButton}
              increaseButton={result.current.incrementButton}
        ></Cart>
    }
    // Trenger re-redering, eller så hadde dette naturlig vært i en beforeAll/Each.

    const setupCart = async () => {
        const products = createProducts(5)
        const idOfFirstProduct = products.entries().next().value[0]

        const {result} = renderHook(() => useCart())
        const button = document.createElement("button")
        button.setAttribute("id", idOfFirstProduct);
        // @ts-ignore - OnClick (react) og onclick har to forskjellige type-krav, klarer ikke blidgjøre begge.
        button.onclick = ((e) => result.current.addItemButton(e))

        await act(async () => {
            await userEvent.click(button)
        })
        const {rerender} = render(buildCart(products, result))

        return {rerender, products, result }
    }

    test("Cart should render child elements once at least single item is bought.", async () => {
        await setupCart()
        const cartRows = document.querySelector("#cart")
        expect(cartRows?.children.item(0)).toBeTruthy()
    })
    test("Increment button should increase the count of the item by one", async () => {
        const {rerender, products, result } = await setupCart()

        const firstElement = document.querySelector(".cartElement");
        const incrementButton = firstElement?.getElementsByClassName('btnIncrement')[0] as Element;
        await act(async () => {
            await userEvent.click(incrementButton)
        })

        rerender(buildCart(products, result))
        const itemCount = firstElement?.getElementsByClassName('itemCount')[0].innerHTML;

        expect(itemCount).toBe("2x");
    })
    test("Decrement button button should not reduce amount under zero.", async () => {
        const {rerender, products, result } = await setupCart()

        const firstElement = document.querySelector(".cartElement");
        const decreaseButton = firstElement?.getElementsByClassName('btnDecrease')[0] as Element;
        await act(async () => {
            await userEvent.click(decreaseButton)
        })

        rerender(buildCart(products, result))
        const itemCount = firstElement?.getElementsByClassName('itemCount')[0].innerHTML;

        expect(itemCount).toBe("1x");
    })
    test("Decreasing element by one after two increments should leave the value at two.", async () => {
        const {rerender, products, result } = await setupCart()

        const firstElement = document.querySelector(".cartElement");
        const incrementButton = firstElement?.getElementsByClassName('btnIncrement')[0] as Element;
        const decreaseButton = firstElement?.getElementsByClassName('btnDecrease')[0] as Element;
        await act(async () => {
            await userEvent.click(incrementButton)
            await userEvent.click(incrementButton)
            await userEvent.click(decreaseButton)
        })

        rerender(buildCart(products, result))
        const itemCount = firstElement?.getElementsByClassName('itemCount')[0].innerHTML;

        expect(itemCount).toBe("2x");
    })
    test("Deleting an element should remove it from the list.", async () => {
        const {rerender, products, result } = await setupCart()
        const cartRows = document.querySelector("#cart")

        const firstElement = cartRows?.querySelector(".cartElement");
        const deleteButton = firstElement?.getElementsByClassName('btnDelete')[0] as Element;
        await act(async () => {
            await userEvent.click(deleteButton)
        })

        rerender(buildCart(products, result))
        expect(cartRows?.children.length).toBe(0)
    })
})