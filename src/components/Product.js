import React from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Product = () => {
	const [productContent, setProductContent] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const { id } = useParams();

	async function getProduct() {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);
		const data = await response.json();
		setProductContent(data);
		setLoading(false);
	}

	React.useEffect(() => {
		getProduct();
	}, []);
	return (
		<div>
			{loading && <h2>Loading....</h2>}
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
						<h3 className="rating-star">
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
								<p>0</p>
								<button>+</button>
							</div>
						</div>
						<div className="product-buttons">
							<button>Add to Cart</button>
							<button>Buy Now</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Product;
