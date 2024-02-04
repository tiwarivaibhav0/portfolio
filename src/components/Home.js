import React from "react";

const Home = () => {
	return (
		<section className="home" id="home">
			<div className="max-width">
				<div className="home-content">
					<div className="text-1">Hello 👋 I'm</div>
					<div className="text-2">Vaibhav Kr Tiwari</div>
					<div className="text-3">
						And I'm a <span className="typing"></span>
					</div>
					<a href="https://www.linkedin.com/in/tiwarivaibhav0/" target="_blank" rel="noreferrer">
						Connect on Linkedin <i className="fad fa-angle-right"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
