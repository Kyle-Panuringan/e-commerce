import React from "react";
import Features from "./Features";

const Home = ({ products, featureImages }) => {
	return (
		<div>
			<Features featureImages={featureImages} />
		</div>
	);
};

export default Home;
