import React, { useState } from "react";
import { IoFunnelOutline } from "react-icons/io5";
import { BsCheckAll } from "react-icons/bs";
import { GiSmartphone, GiHeartNecklace, GiLargeDress } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const categories = [
	{
		icon: <BsCheckAll />,
		name: "All",
	},
	{
		icon: <GiSmartphone />,
		name: "Electronics",
	},
	{
		icon: <GiHeartNecklace />,
		name: "Jewelery",
	},
	{
		icon: <FaTshirt />,
		name: "Men's Clothing",
	},
	{
		icon: <GiLargeDress />,
		name: "Women's Clothing",
	},
];

const Store = ({ products }) => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [categoryFitler, setCategoryFilter] = useState("");
	const [filterStar, setFilterStar] = useState("");

	// Seperate the filter method to able to know if the array is length is greater than 0
	const filterProducts = products.filter((product) => {
		if (filterStar == Math.round(product.rating.rate)) {
			if (categoryFitler === "all") {
				return product;
			} else if (categoryFitler) {
				return product.category === categoryFitler;
			} else {
				return product;
			}
		} else if (filterStar == 0) {
			if (categoryFitler === "all") {
				return product;
			} else if (categoryFitler) {
				return product.category === categoryFitler;
			} else {
				return product;
			}
		}
	});

	return (
		<div>
			<button
				className="filter-button"
				onClick={() => setShowSidebar(true)}
			>
				<IoFunnelOutline />
			</button>
			<div className={`store-base ${showSidebar && "show-sidebar"}`}>
				<div className="search-box">
					<input type="text" placeholder="Search...." />
					<button>X</button>
				</div>
				<div className="sort-buttons">
					<button>price</button>
					<select
						name="rating"
						id="rating"
						onClick={(e) => setFilterStar(e.target.value)}
					>
						<option value="0">All</option>
						<option value="1">1 Star</option>
						<option value="2">2 Star</option>
						<option value="3">3 Star</option>
						<option value="4">4 Star</option>
						<option value="5">5 Star</option>
					</select>
				</div>

				<div className="store-buttons">
					<h2>Categories</h2>
					<div className="filter-buttons">
						{categories.map((category, index) => {
							const { icon, name } = category;
							return (
								<button
									key={index}
									onClick={() => {
										setCategoryFilter(name.toLowerCase());
									}}
								>
									<span className="icon-category">
										{icon}
									</span>
									{name}
								</button>
							);
						})}
						<button
							className="close-category"
							onClick={() => {
								setShowSidebar(false);
							}}
						>
							CLOSE
						</button>
					</div>
				</div>
			</div>
			{/* Store Content */}
			<div className="store-content-base">
				<ul>
					{filterProducts.length > 0 ? (
						filterProducts.map((product) => {
							const { id, image, price, rating, title } = product;
							return (
								<li key={id}>
									<div className="product-details">
										<img src={image} alt={title} />
										<h4>{title}</h4>
										<h5>&#8369;{price}</h5>
										<div className="rating-star">
											<h6>
												{Array.from({
													length: Math.round(
														rating.rate
													),
												}).map(() => {
													return <AiFillStar />;
												})}
											</h6>
											<h6>({rating.count})</h6>
										</div>
									</div>
								</li>
							);
						})
					) : (
						<div className="emptyDisplay">
							<h2>
								No available products based on your search or
								filter.
							</h2>
						</div>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Store;
