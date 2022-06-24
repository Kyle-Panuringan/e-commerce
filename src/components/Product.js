import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
	const [productContent, setProductContent] = React.useState({});
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
			{productContent && (
				<div className="product-content">
					<div className="product-head">
						<img
							src={productContent.image}
							alt={productContent.title}
						/>
					</div>
					<div className="product-body">
						<h2>{productContent.title}</h2>
					</div>
				</div>
			)}
		</div>
	);
};

export default Product;
