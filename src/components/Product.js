import React from "react";
import { AiFillStar } from "react-icons/ai";

const Product = ({
	addToCart,
	productData,
	setModalProduct,
	quantity,
	setQuantity,
}) => {
	const { image, title, price, rating } = productData;

	return (
		<div
			className="product-modal"
			onClick={() => {
				setModalProduct(false);
				setQuantity(1);
			}}
		>
			<div
				className="product-container"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					className="close-modal"
					onClick={() => {
						setModalProduct(false);
						setQuantity(1);
					}}
				>
					X
				</button>
				<div className="content">
					<img src={image} alt={title} />
					<div className="right">
						<h2>{title}</h2>
						<h3 className="rating">
							{Array.from({
								length: Math.round(rating.rate),
							}).map(() => {
								return <AiFillStar />;
							})}
							<span>{rating.count} ratings</span>
						</h3>
						<h3 className="price">&#8369;{price}</h3>
						<div className="buttons-quantity">
							<h3>Quantity: </h3>
							<button
								onClick={() => {
									setQuantity(
										quantity > 1 ? quantity - 1 : quantity
									);
								}}
							>
								-
							</button>
							<span>{quantity}</span>
							<button
								onClick={() => {
									setQuantity(quantity + 1);
								}}
							>
								+
							</button>
						</div>
						<div className="buttons-footer">
							<button
								onClick={() => {
									addToCart(productData, quantity);
								}}
							>
								Add to Cart
							</button>
							<button>Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
