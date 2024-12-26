import {useContext, useEffect, useState} from "react";
import {CartContext} from "../context/CartContext";

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(cartItems)
    }, [cartItems]);

    return (
        <>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">{items.length}</span>
            </h4>
            <ul className="list-group mb-3">
                {
                    items.length > 0 ? (
                        items.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">{item.title}</h6>
                                    <small className="text-body-secondary">{item.author}</small>
                                </div>
                                <span className="text-body-secondary">{item.price}</span>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">No items</h6>
                            </div>
                            <span className="text-body-secondary"></span>
                        </li>
                    )
                }

                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                </li>
            </ul>
        </>
    );
}

export default Cart;