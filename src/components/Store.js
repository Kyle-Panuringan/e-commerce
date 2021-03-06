import React, { useState } from "react";
import { IoFunnelOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

const Store = ({
	products,
	sortProducts,
	ascend,
	search,
	setSearch,
	setAscend,
	setProducts,
	unsortProducts,
	categories,
	homeCategory,
	setProductData,
	setModalProduct,
}) => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [categoryFitler, setCategoryFilter] = useState(
		homeCategory ? homeCategory.toLowerCase() : "all"
	);
	const [filterStar, setFilterStar] = useState("");
	const [activeButton, setActiveButton] = useState(
		homeCategory ? homeCategory : "All"
	);
	const sortArrow = ascend.sortAscend ? "▴" : "▾";

	function resetSortProducts() {
		setAscend({ sortAscend: false, sortActive: false });
		setProducts(unsortProducts);
		setFilterStar("0");
	}

	// Seperate the some filter method to able to know if the array is length is greater than 0
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
					<input
						type="text"
						placeholder="Search...."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					{search && <button onClick={() => setSearch("")}>X</button>}
				</div>
				{/* Sort Price & Filter Rating */}
				<div className="sort-buttons">
					<button onClick={sortProducts}>
						price{ascend.sortActive && sortArrow}
					</button>
					<select
						name="rating"
						id="rating"
						value={filterStar}
						onChange={(e) => setFilterStar(e.target.value)}
					>
						<option value="0">All</option>
						<option value="1">1 Star</option>
						<option value="2">2 Star</option>
						<option value="3">3 Star</option>
						<option value="4">4 Star</option>
						<option value="5">5 Star</option>
					</select>
					<button onClick={resetSortProducts}>Reset</button>
				</div>

				<div className="store-buttons">
					<h2>Categories</h2>
					<div className="filter-buttons">
						{categories.map((category, index) => {
							const { icon, name } = category;
							return (
								<button
									className={
										name == activeButton
											? "filter-active"
											: ""
									}
									key={index}
									onClick={() => {
										setCategoryFilter(name.toLowerCase());
										setActiveButton(name);
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
					{/* Seperate the some filter method to able to know if the array is length is greater than 0 (If 0 then return false) */}
					{filterProducts.length > 0 ? (
						filterProducts
							.filter((filterProduct) => {
								if (search === "") {
									return filterProduct;
								} else if (
									search
										.toLowerCase()
										.startsWith(search.toLowerCase()) ===
									filterProduct.title
										.toLowerCase()
										.startsWith(search.toLowerCase())
								) {
									return filterProduct;
								}
							})
							.map((product) => {
								const { id, image, price, rating, title } =
									product;
								return (
									<li
										key={id}
										onClick={() => {
											setProductData(product);
											setModalProduct(true);
										}}
									>
										<div className="product-details">
											<img src={image} alt={title} />
											<h4>{title}</h4>
											<h5>&#8369;{price}</h5>
											<div className="rating-star">
												<h6>
													{/* User Array.from to set the length based on rating value from a object and print how many star it will map */}
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
