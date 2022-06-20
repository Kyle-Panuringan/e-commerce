import React from "react";
import { IoFunnelOutline } from "react-icons/io5";
import { BsCheckAll } from "react-icons/bs";
import { GiSmartphone, GiHeartNecklace, GiLargeDress } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";

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
		name: "Jewelry",
	},
	{
		icon: <FaTshirt />,
		name: "Men's Clothing",
	},
	{
		icon: <GiLargeDress />,
		name: "Woman's Clothing",
	},
];

const Store = ({ products }) => {
	return (
		<div className="store-base">
			<div className="search-box">
				<input type="text" placeholder="Search...." />
				<button>X</button>
			</div>
			<button className="filter-button">
				<IoFunnelOutline />
			</button>
			<div className="sort-buttons">
				<button>price</button>
				<select name="rating" id="rating">
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
					{categories.map((category) => {
						const { icon, name } = category;
						return (
							<button>
								<span className="icon-category">{icon}</span>
								{name}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Store;
