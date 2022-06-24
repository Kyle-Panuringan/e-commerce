import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import NewsEvents from "./components/NewsEvents";
import About from "./components/About";
import featureImages from "./components/featureImages";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
	const [products, setProducts] = useState([]);
	const [unsortProducts, setUnsortProducts] = useState([]);
	const [cartItems, setCartItems] = useState(0);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(true);
	const [homeCategory, setHomeCategory] = useState("");
	const [ascend, setAscend] = useState({
		sortAscend: false,
		sortActive: false,
	});
	function sortProducts() {
		let sortItems = [...products];
		if (ascend.sortAscend) {
			setProducts(sortItems.sort((a, b) => a.price - b.price));
		} else {
			setProducts(sortItems.sort((a, b) => b.price - a.price));
		}
		setAscend({ sortAscend: !ascend.sortAscend, sortActive: true });
	}

	const getProducts = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		setProducts(data);
		setUnsortProducts(data);
		setLoading(false);
		console.log("Fetch Run");
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Router>
			<Navbar cartItems={cartItems} />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							categories={categories}
							featureImages={featureImages}
							setHomeCategory={setHomeCategory}
						/>
					}
				></Route>
				<Route
					path="/store"
					element={
						<Store
							products={products}
							loading={loading}
							sortProducts={sortProducts}
							ascend={ascend}
							search={search}
							setSearch={setSearch}
							setProducts={setProducts}
							unsortProducts={unsortProducts}
							setAscend={setAscend}
							categories={categories}
							homeCategory={homeCategory}
						/>
					}
				></Route>
				<Route path="/news-events" element={<NewsEvents />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route
					path="/product/:id"
					element={<Product setCartItems={setCartItems} />}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
