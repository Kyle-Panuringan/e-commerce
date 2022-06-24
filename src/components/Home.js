import React from "react";
import { Link } from "react-router-dom";
import Features from "./Features";

const Home = ({ categories, featureImages, setHomeCategory }) => {
	return (
		<div>
			<Features featureImages={featureImages} />
			<div className="home-base-categories">
				<div className="home-categories">
					{categories.map((category, index) => {
						const { icon, name } = category;
						return (
							<Link
								to="store"
								key={index}
								onClick={() => {
									setHomeCategory(name);
								}}
							>
								<span className="icon-category">{icon}</span>
								{name}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
