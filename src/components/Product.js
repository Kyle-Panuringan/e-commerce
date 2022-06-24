import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Product = ({ setCartItems }) => {
	const [productContent, setProductContent] = useState([]);
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const { id } = useParams();

	function addToCart(product) {
		setCart([...cart, { product }]);
	}

	async function getProduct() {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);
		const data = await response.json();
		setProductContent(data);
		setLoading(false);
	}

	useEffect(() => {
		setCartItems(cart.length);
		console.log(cart);
	}, [cart]);

	useEffect(() => {
		getProduct();
	}, []);
	return (
		<div>
			<button className="product-back" onClick={() => navigate(-1)}>
				🞀 Go Back
			</button>
			{loading && <h2 className="loadingScreen">Loading....</h2>}
			{loading || (
				<div className="product-content">
					<div className="product-head">
						<img
							src={productContent.image}
							alt={productContent.title}
						/>
					</div>
					<div className="product-body">
						<h2>{productContent.title}</h2>
						<h3 className="product-star-product">
							{/* User Array.from to set the length based on rating value from a object and print how many star it will map */}
							{Array.from({
								length: Math.round(productContent.rating.rate),
							}).map(() => {
								return <AiFillStar />;
							})}
							<span>{productContent.rating.count} ratings</span>
						</h3>
						<h3>&#8369;{productContent.price}</h3>

						<div className="product-quantity">
							<h3>Quantity:</h3>
							<div>
								<button>-</button>
								<p>1</p>
								<button>+</button>
							</div>
						</div>
						<div className="product-buttons">
							<button
								onClick={() => {
									addToCart(productContent);
								}}
							>
								Add to Cart
							</button>
							<button>Buy Now</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Product;
