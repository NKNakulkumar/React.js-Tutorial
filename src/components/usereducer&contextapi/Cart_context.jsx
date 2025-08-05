import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

export const CartProvider=(props)=>{
    const initialstate={
        items :[],
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_ITEM':
                return {
                    ...state,
                    items: [...state.items, action.payload], 
                };
            default:
                return state;
        }
    };
const [state,dispatch]=useReducer(reducer,initialstate)

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}