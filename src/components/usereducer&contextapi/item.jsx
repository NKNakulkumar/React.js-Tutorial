import { useContext } from "react";
import {CartContext } from "./Cart_context"
export const Item = (props) => {
const state = useContext(CartContext);
// console.log(cart)
    return (
       <div> 
       <h4> Item : {props.name}</h4>
        <h4> Item  Price : $ {props.price}</h4>
        <button onClick={() => state.dispatch({ type: 'ADD_ITEM', payload: { name: props.name, price: props.price } })} className="bg-blue-500 rounded-xl py-2 px-4 cursor-pointer flex-1/3  mr-2.5">Add to Cart</button>
        </div>
    )
}
