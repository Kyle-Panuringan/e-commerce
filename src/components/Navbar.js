import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
	const [showLink, setShowLink] = React.useState(false);

	return (
		<nav>
			<div className="nav-base">
				<div className="nav-header">
					<h1>E-Commerce</h1>
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
					<a href="#">Home</a>
					<a href="#">Store</a>
					<a href="#">Contact Us</a>
					<a href="#">About Us</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
