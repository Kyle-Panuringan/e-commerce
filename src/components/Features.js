import React from "react";
import ArrowSlider from "./ArrowSlider";

const Features = ({ featureImages }) => {
	const [slideIndex, setSlideIndex] = React.useState(1);

	const nextSlide = () => {
		if (slideIndex !== featureImages.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === featureImages.length) {
			setSlideIndex(1);
		}
	};

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(featureImages.length);
		}
	};

	return (
		<div className="slider-container">
			{featureImages &&
				featureImages.map((fImage, index) => {
					return (
						<div
							key={index}
							className={
								slideIndex === index + 1
									? "slide active-slide"
									: "slide"
							}
						>
							<img src={fImage.image} alt={fImage.alt} />
						</div>
					);
				})}
			{/* Show the button twice by calling it here in JSX */}
			<ArrowSlider moveSlide={nextSlide} direction={"next"} />
			<ArrowSlider moveSlide={prevSlide} direction={"prev"} />
		</div>
	);
};

export default Features;
