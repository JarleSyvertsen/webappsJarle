import React, {useState} from "react";

export default function useCart() {
    const [cartState, setCartState] = useState(new Map<string, cartData>);

    const addItem = (inputId: string) => {
        const cartItem: cartData = {itemId: inputId, count: 1}
        const exists = cartState.get(inputId);
        if(!exists) { setCartState(prevState => new Map(prevState.set(inputId, cartItem)))}
    }

    const addItemButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        addItem(e.target.id);
    }

    const updateItem = (inputId: string, updateValue: number) => {
        const updateItem = cartState.get(inputId);
        if(!updateItem) {
            return;
        }
        if(updateItem.count <= 1 && updateValue < 0) {
            return;
        }
        updateItem.count += updateValue;
        setCartState(prevState => new Map(prevState.set(inputId, updateItem)));
    }

    const incrementButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        updateItem(e.target.id, 1);
    }
    const decreaseButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        updateItem(e.target.id, -1);
    }

  return {addItemButton, incrementButton, decreaseButton, cartState}
}

