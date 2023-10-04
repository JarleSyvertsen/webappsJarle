import {useMap} from "usehooks-ts";

export default function useCart() {
    const [cartState, actions] = useMap<string, cartData>();
    // Litt usikker på hvordan den reneste måten er å unngå å bruke hele definisjonen av cartState
    // Siden den vil ikke matche noen typedefinitions når vi starter å passe den rundt.
    const cartMap = (cartState as unknown as Map<String, cartData>)
    const addItem = (inputId: string) => {
        const cartItem: cartData = {itemId: inputId, count: 1}
        const exists = cartState.get(inputId);
        if(!exists) { actions.set(inputId, cartItem) }
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
        actions.set(inputId, updateItem);
    }

    const deleteItem = (inputId: string) => {
        const deleteItem = cartState.get(inputId);
        if(!deleteItem) {
            return;
        }
        actions.remove(inputId);
    }

    const incrementButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        updateItem(e.target.id, 1);
    }
    const decreaseButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        updateItem(e.target.id, -1);
    }

    const deleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        deleteItem(e.target.id);
    }


  return {addItemButton, incrementButton, decreaseButton, deleteButton, cartMap}
}

