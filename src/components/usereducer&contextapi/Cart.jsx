import { useContext } from "react";
import { CartContext } from "./Cart_context";

export const Cart = () => {
    const { state } = useContext(CartContext);
    const total = state.items.reduce((sum, item) => {
        return sum + parseInt(item.price);
    }, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {state.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {state.items.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total Bill: ${total}</h2>
        </div>
    );
};
