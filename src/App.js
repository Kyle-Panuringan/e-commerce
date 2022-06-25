import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import NewsEvents from "./components/NewsEvents";
import About from "./components/About";
import featureImages from "./components/featureImages";
import Product from "./components/Product";
import CartBasket from "./components/CartBasket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BsCheckAll } from "react-icons/bs";
import { GiSmartphone, GiHeartNecklace, GiLargeDress } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import data from "./components/data";

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
	const [products, setProducts] = useState(data);
	const [productData, setProductData] = useState(null);
	const [cartItems, setCartItems] = useState([]);
	const [itemCount, setItemCount] = useState(1);
	const [search, setSearch] = useState("");
	const [homeCategory, setHomeCategory] = useState("");
	const [modalProduct, setModalProduct] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [ascend, setAscend] = useState({
		sortAscend: false,
		sortActive: false,
	});
	const unsortProducts = data;
	// Add Product in Cart
	function addToCart(product, qty = 1) {
		// Check if the pass product exist in "cartItems" by find method to locate its "id" if already exist
		const exist = cartItems.find((item) => item.id === product.id);
		if (exist) {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...exist, quantity: exist.quantity + qty }
						: item
				)
			);
		} else {
			// If the new product does not exist, then add it to "cartItems", and give it new property called "quantity"
			setCartItems([...cartItems, { ...product, quantity: qty }]);
		}
	}
	// Remove Product in Cart
	function removeToCart(product) {
		const exist = cartItems.find((item) => item.id === product.id);
		if (exist.quantity === 1) {
			setCartItems(cartItems.filter((item) => item.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...exist, quantity: exist.quantity - 1 }
						: item
				)
			);
		}
	}
	// Sort Products by Price
	function sortProducts() {
		let sortItems = [...products];
		if (ascend.sortAscend) {
			setProducts(sortItems.sort((a, b) => a.price - b.price));
		} else {
			setProducts(sortItems.sort((a, b) => b.price - a.price));
		}
		setAscend({ sortAscend: !ascend.sortAscend, sortActive: true });
	}

	useEffect(() => {
		console.log(cartItems);
		console.log("Length:", cartItems.length);
	}, [cartItems]);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							categories={categories}
							featureImages={featureImages}
							setHomeCategory={setHomeCategory}
							itemCount={itemCount}
						/>
					}
				></Route>
				<Route
					path="/store"
					element={
						<Store
							products={products}
							sortProducts={sortProducts}
							ascend={ascend}
							search={search}
							setSearch={setSearch}
							setProducts={setProducts}
							unsortProducts={unsortProducts}
							setProductData={setProductData}
							setAscend={setAscend}
							categories={categories}
							homeCategory={homeCategory}
							setModalProduct={setModalProduct}
						/>
					}
				></Route>
				<Route path="/news-events" element={<NewsEvents />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route
					path="/cart-items"
					element={
						<CartBasket
							cartItems={cartItems}
							setCartItems={setCartItems}
							addToCart={addToCart}
							removeToCart={removeToCart}
						/>
					}
				></Route>
			</Routes>
			{modalProduct && (
				<Product
					addToCart={addToCart}
					productData={productData}
					setModalProduct={setModalProduct}
					quantity={quantity}
					setQuantity={setQuantity}
				/>
			)}
		</Router>
	);
}

export default App;
