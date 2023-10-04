import {render, renderHook} from "@testing-library/react";
import Cart from "@/components/Cart";
import { createProducts } from "@/features/products/generateProducts";
import useCart from "@/hooks/useCart";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import {beforeAll} from "vitest";

describe("Cart functions should behave properly", () => {
    beforeEach(async () => {
        const products = createProducts(5)
        const idOfFirstProduct = products.entries().next().value[0]
        const {result } = renderHook(() => useCart())
        const button = document.createElement("button")
        button.setAttribute("id", idOfFirstProduct);

        // @ts-ignore - Ukjent hvordan jeg caster en MouseEvent til React.MouseEvent, og onClick
        // gitt i reat propsa klager når jeg ikke møter standarden til en MouseEventHandler
        // (Forventer React.MouseEvent)
        button.onclick = ((e) => result.current.addItemButton(e))

        await act(async () => {
            await userEvent.click(button)
        })
        render(
            <Cart products={products}
                  cart={result.current.cartMap}
                  decreaseButton={result.current.decreaseButton}
                  deleteButton={result.current.deleteButton}
                  increaseButton={result.current.incrementButton}
            ></Cart>)
    })

    test("Cart should render child elements once at least single item is bought.", () => {
        const cartRows = document.querySelector("#cart")
        expect(cartRows?.children.item(0)).toBeTruthy()
    })
    test("Increment button should increase the count of the item by one", async () => {
        const firstElement = document.querySelector(".cartElement");
        const incrementButton = firstElement?.getElementsByClassName('btnIncrement')[0] as Element;

        await act(async () => {
            await userEvent.click(incrementButton)
        })
        const itemCount = firstElement?.getElementsByClassName('itemCount')[0].innerHTML;

        console.log(itemCount)
    })
})