import {render, renderHook} from "@testing-library/react";
import Cart from "@/components/Cart";
import { createProducts } from "@/features/products/generateProducts";
import useCart from "@/hooks/useCart";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Cart functions should behave properly", () => {
    test("Cart should render once a single item is bought.", async () => {
        const products = createProducts(5);
        const idOfFirstProduct = products.entries().next().value[0];

        const {result } = renderHook(() => useCart())
        const button = document.createElement("button");
        button.setAttribute("id", idOfFirstProduct);
        // @ts-ignore - Ukjent hvordan jeg caster en MouseEvent til React.MouseEvent, og onClick
        // gitt i reat propsa klager når jeg ikke møter standarden til en MouseEventHandler
        // (Forventer React.MouseEvent)
        button.onclick = ((e) => result.current.addItemButton(e));

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

        const cartRows = document.querySelectorAll("#cart > .cartElement");
        expect(cartRows.item(0)).toBeTruthy()
    })
})