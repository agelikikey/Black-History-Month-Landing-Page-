import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Card } from "./card";
import { Background } from "./background";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { fileURLToPath } from "url";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<div className="text-center mt-5">
				<h1>
					Never be limited by other people’s limited imaginations.
				</h1>
				<h6>
					—Dr. Mae Jemison, first African-American female astronaut
				</h6>
				<p>
					<img src="https://lh3.googleusercontent.com/proxy/Eq-p703WYfEAmpwITI5vviAXPu5Iqhw6ocACoHPrh43hpVaISMFNJYA1KP3y8zISPfr4L0HDLeRjtGDYV6F5FJlVR5dr1RkgRW_4dTVKCrlLpYey0y1b1oJqNHoEYQ" />
				</p>
				<a href="#" className="btn btn-success px-5 py-5 mx-5 my-5">
					If you see this green button... bootstrap is working
				</a>
				<div className="d-flex card-group card-deck justify-content-between">
					<Card
						imgUrl="https://www.biography.com/activist/rosa-parks"
						title="Rosa Parks"
						image="https://upload.wikimedia.org/wikipedia/commons/c/c4/Rosaparks.jpg"
						buttonColor="btn btn-dark"
					/>
					<Card
						imgUrl="https://www.biography.com/activist/martin-luther-king-jr"
						title="Martin Luther King Jr"
						image="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjgwNDg5NDgz/martin-luther-king-jr-9365086-2-402.jpg"
						buttonColor="btn btn-danger"
					/>
					<Card
						imgUrl="https://barackobama.com/"
						title="Barack Obama"
						image="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"
						buttonColor="btn btn-warning"
					/>
					<Card
						imgUrl="https://www.biography.com/astronaut/mae-c-jemison"
						title="Mae Jemison"
						image="https://www.biography.com/.image/t_share/MTE1ODA0OTcxODY2MjkzNzcz/mae-jemison-9542378-1-402.jpg"
						buttonColor="btn btn-info"
					/>
				</div>
				<Footer />
			</div>
		</>
	);
}
