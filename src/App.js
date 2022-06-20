import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import NewsEvents from "./components/NewsEvents";
import About from "./components/About";
import featureImages from "./components/featureImages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		setProducts(data);
		console.log("Fetch Run");
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							products={products}
							featureImages={featureImages}
						/>
					}
				></Route>
				<Route
					path="/store"
					element={<Store products={products} />}
				></Route>
				<Route path="/news-events" element={<NewsEvents />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
