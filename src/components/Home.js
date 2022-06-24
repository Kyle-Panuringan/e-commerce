import React from "react";
import Features from "./Features";

const Home = ({ categories, featureImages }) => {
	return (
		<div>
			<Features featureImages={featureImages} />
			<div className="home-base-categories">
				<div className="home-categories">
					{categories.map((category, index) => {
						const { icon, name } = category;
						return (
							<button key={index}>
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

export default Home;
