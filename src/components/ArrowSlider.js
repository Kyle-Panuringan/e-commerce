import React from "react";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const ArrowSlider = ({ direction, moveSlide }) => {
	return (
		<button
			onClick={moveSlide}
			className={
				direction === "next" ? "btn-slide next" : "btn-slide prev"
			}
		>
			{direction === "next" ? (
				<RiArrowRightSLine />
			) : (
				<RiArrowLeftSLine />
			)}
		</button>
	);
};

export default ArrowSlider;
