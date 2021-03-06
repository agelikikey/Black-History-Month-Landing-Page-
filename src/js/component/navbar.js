import React from "react";

//create your first component
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Pricing
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							This is Ageliki
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
