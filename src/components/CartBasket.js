import React from "react";

const CartBasket = ({ cartItems, setCartItems, addToCart, removeToCart }) => {
	// Calculate the total price of every quantity that is inside the cartItems Array
	const totalPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);

	function removeItem(product) {
		setCartItems(cartItems.filter((item) => item.id !== product.id));
	}

	return (
		<div className="cart-basket">
			{cartItems.length === 0 && <h2>Your Cart is Empty!</h2>}
			{cartItems.map((item) => {
				return (
					<div key={item.id}>
						<div className="cart-details">
							<div className="left">
								<img src={item.image} alt={item.title} />
								<div>
									<h2>{item.title}</h2>
									<h2>
										&#8369;
										{item.price}
									</h2>
									<button
										onClick={() => {
											removeItem(item);
										}}
									>
										Remove
									</button>
								</div>
							</div>
							<div className="right">
								<button
									onClick={() => {
										addToCart(item);
									}}
								>
									▲
								</button>
								<span>{item.quantity}</span>
								<button
									onClick={() => {
										removeToCart(item);
									}}
								>
									▼
								</button>
							</div>
						</div>
					</div>
				);
			})}
			{cartItems.length > 0 && (
				<div>
					<div className="cart-total">
						<h3>Total Price: </h3>
						<h3>&#8369;{totalPrice.toFixed(2)}</h3>
					</div>
					<div className="cart-clear">
						<button onClick={() => setCartItems([])}>
							Clear Cart
						</button>
						<button>Checkout</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartBasket;
