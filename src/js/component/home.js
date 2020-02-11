import React, { useState } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Card } from "./card";
import { Background } from "./background";
import { Jumbotron } from "./jumbotron";
import { Bgvideo } from "./bgvideo";
import { Index } from "./index";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { fileURLToPath } from "url";

//create your first component
export function Home() {
	const [color, setColor] = useState("btn btn-danger");
	const [header, setHeader] = useState(
		"Never be limited by other people’s limited imaginations."
	);
	// let whatever = "info";
	// there are two variables here the first one you can call it whatever you want its the state, the second one you can also name whatever you want but its best to keep it organized.  In the parathensis you assign the set value.  If you want to reassign the value to the variable you use setColor.  If we changed the buttonColor={color} , notice we arent using a string here like before.

	return (
		<>
			<Navbar />
			<div className="text-center mt-3 bg-video">
				<Jumbotron />
				<p>
					<img src="https://studybreaks.com/wp-content/uploads/2018/02/Black-History-Month-2017-Image.jpg" />
				</p>
				<h3> {header} </h3>
				<h6>
					—Dr. Mae Jemison, first African-American female astronaut
				</h6>
				<a
					href="#"
					className="btn btn-success px-2 py-2 mx-2 my-2"
					onClick={() => {
						setColor("btn btn-warning");
						setHeader("THE HEADER HAS CHANGED");
					}}>
					If you see this green button... bootstrap is working
				</a>
				<div className="d-flex card-group card-deck justify-content-between">
					<Card
						imgUrl="https://www.biography.com/activist/rosa-parks"
						title="Rosa Parks"
						image="https://upload.wikimedia.org/wikipedia/commons/c/c4/Rosaparks.jpg"
						buttonColor={color}
						// buttonColor="btn btn-dark"
					/>
					<Card
						imgUrl="https://www.biography.com/activist/martin-luther-king-jr"
						title="Martin Luther King Jr"
						image="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjgwNDg5NDgz/martin-luther-king-jr-9365086-2-402.jpg"
						buttonColor={color}
					/>
					<Card
						imgUrl="https://barackobama.com/"
						title="Barack Obama"
						image="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"
						buttonColor={color}
					/>
					<Card
						imgUrl="https://www.biography.com/astronaut/mae-c-jemison"
						title="Mae Jemison"
						image="https://www.biography.com/.image/t_share/MTE1ODA0OTcxODY2MjkzNzcz/mae-jemison-9542378-1-402.jpg"
						buttonColor={color}
					/>
				</div>
				<Footer />
			</div>
		</>
	);
}
