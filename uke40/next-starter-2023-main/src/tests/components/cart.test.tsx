import {render, renderHook} from "@testing-library/react";
import Cart from "@/components/Cart";
import { createProducts } from "@/features/products/generateProducts";
import useCart from "@/hooks/useCart";

describe("Cart functions should behave properly", () => {
    test("Cart should render once a single item is bought.", () => {
        const products = createProducts(5);
        const cartHook = renderHook(() => useCart())
        const {addItemButton, deleteButton, cartMap, incrementButton, decreaseButton} = cartHook.result.current;

        const button = shallow((<button onClick={addItemButton}>Add to cart</button>))

        render(<Cart products={products} cart={cartMap} decreaseButton={decreaseButton} deleteButton={deleteButton} increaseButton={incrementButton}></Cart>)




    })
})