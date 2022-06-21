import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
	const [showLink, setShowLink] = React.useState(false);

	return (
		<nav>
			<div className="nav-base">
				<div className="nav-header">
					<h1>
						<i>
							<span style={{ color: "red" }}>E-Com</span>merce
						</i>
					</h1>
					<div className="nav-buttons">
						<div className="nav-cart-items">
							<button className="nav-cart">
								<p className="nav-cart-numbers">01</p>
								<FaShoppingCart />
							</button>
						</div>
						<button
							className="nav-hamburger"
							onClick={() => setShowLink(!showLink)}
						>
							<GiHamburgerMenu />
						</button>
					</div>
				</div>
				<div className={`links ${showLink && "show-links"}`}>
					<Link to="/">Home</Link>
					<Link to="/store">Store</Link>
					<Link to="/news-events">News &amp; Events</Link>
					<Link to="about">About Us</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;