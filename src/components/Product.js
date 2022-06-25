import { AiFillStar } from "react-icons/ai";

const Product = ({ addToCart, productData, setModalProduct }) => {
	const { id, image, title, category, price, rating } = productData;
	return (
		<div
			className="product-modal"
			onClick={() => {
				setModalProduct(false);
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
							<button>-</button>
							<span>0</span>
							<button>+</button>
						</div>
						<div className="buttons-footer">
							<button>Add to Cart</button>
							<button>Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
