import React from "react";

const CartBasket = ({ cartItems }) => {
	return (
		<div className="cart-basket">
			{cartItems && <h2>Your Cart is Empty!</h2>}
		</div>
	);
};

export default CartBasket;
