import React from "react";
import { PropTypes } from "prop-types";

// these are notes for creating a dynamic card component.
export function Card(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title"> {props.title} </h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href={props.imgUrl} className={props.buttonColor}>
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	buttonColor: PropTypes.string
};

// .string is here we specified it was a string so on the home.js we have to give it a string.
// another way to change the button color is like className={"btn btn-" + props.buttonColor}>
