/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Projects = () => {
	const professionalProjects = [
		{
			link: "https://foodfire-app.netlify.app/",
			image: "../banner4.webp",
			alt: "Food Fire App",
		},
	];
	return (
		<section className="projects" id="projects">
			<div className="max-width">
				<h2 className="title fadein">Projects</h2>
				<div className="carousel">
					{professionalProjects.map((it, i) => (
						<div className="card">
							<a href={it.link} target="_blank" rel="noreferrer">
								<div className="box">
									<img src={it.image} alt={it.alt} />
									<p>FoodFire App using React.js</p>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
			{/* <div className="custom-divider"></div>
			<div className="max-width">
				<h2 className="title fadein">Personal Projects</h2>
				<div className="carousel">
					{Array(10)
						.fill(1)
						.map((it, i) => (
							<div className="card">
								<a
									href="https://foodfire-app.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									<div className="box">
										<img src="./banner4.webp" alt="Food Fire App" />
										<p>FoodFire App using React.js</p>
									</div>
								</a>
							</div>
						))}
				</div>
			</div> */}
		</section>
	);
};

export default Projects;
